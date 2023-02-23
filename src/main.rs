use core::time;

use halo2_proofs::halo2curves::{
    group::ff::{PrimeField, PrimeFieldBits},
    pasta::{pallas, vesta, EqAffine, Fp},
};

fn main() {
    let val = 1u64;
    let f = pallas::Base::from(val);
    let f2 = pallas::Scalar::from(val);
    println!("end: {}", val);
}
