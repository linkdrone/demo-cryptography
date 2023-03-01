#!/usr/bin/env python3
# -*-coding:utf-8 -*-

#
# 1. python3 -m venv ./python_venv
# 2. source ./python_venv/bin/activate
# 3. python3 -m pip install --upgrade pip
# 4. pip3 install -r requirements.txt
# 5. python3 ecc_example.py
#

from tinyec.ec import SubGroup, Curve

field = SubGroup(p=17, g=(15, 13), n=18, h=1)
curve = Curve(a=0, b=7, field=field, name='p1707')
print('curve:', curve)

for k in range(0, 25):
    p = k * curve.g
    print(f"{k} * G = ({p.x}, {p.y})")
