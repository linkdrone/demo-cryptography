package main

import (
	"fmt"

	"github.com/coinbase/kryptology/pkg/core/curves"
)

func main() {
	// m := 1
	val1 := 1

	msg := []byte{1}

	curve := curves.PALLAS()

	toPoint := curve.Point.Hash(msg)

	fmt.Printf("Curve type: [%s]\n", curve.Name)

	x := curve.Scalar.New(val1)
	G := curve.Point.Generator()
	xG := curve.Point.Generator().Mul(x)
	lenb := len(G.ToAffineUncompressed())
	Gx := G.ToAffineUncompressed()[0 : lenb/2]
	Gy := G.ToAffineUncompressed()[lenb/2 : lenb]
	xGx := xG.ToAffineUncompressed()[0 : lenb/2]
	xGy := xG.ToAffineUncompressed()[lenb/2 : lenb]
	fmt.Printf("--- Basic point operation ---\n")
	fmt.Printf("x=%x\n", x.Bytes())
	fmt.Printf("G(x,y)=%x, %x\n", Gx, Gy)
	fmt.Printf("xG(x,y)=%x, %x\n  \n", xGx, xGy)
	fmt.Printf("--- Basic hashing method ---\n")
	fmt.Printf("Message: [%s]\n", msg)
	fmt.Printf("\n=== Hash to scalar ===\n")
	toScalar := curve.Scalar.Hash(msg[:])
	fmt.Printf("Scalar: %x\n", toScalar.Bytes())
	fmt.Printf(" Scalar: %s\n", toScalar.BigInt())
	fmt.Printf("\n=== Hash to point ===\n")
	fmt.Printf("Point: %x\n", toPoint.ToAffineUncompressed())
	fmt.Printf("X: %x\n", toPoint.ToAffineUncompressed()[0:lenb/2])
	fmt.Printf("Y: %x\n", toPoint.ToAffineUncompressed()[lenb/2:lenb])
}
