import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MustMatch } from '../../validators/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  showPassword = false;
  showErrors = false;
  
  registerForm: FormGroup = this.fb.group({
    firstName:        ['', [Validators.required]],
    lastName:         ['', [Validators.required]],
    email:            ['', [Validators.email, Validators.required]],
    password:         ['', [Validators.minLength(8), Validators.required]],
    confirmPassword:  ['', [Validators.required]]
  }, {
    validator:  MustMatch('password', 'confirmPassword')
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {    
    this.registerForm.valueChanges.subscribe(() => this.showErrors = false);
  }
  
  onSubmit(): void {
    if(this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(data => console.log(data));
      this.router.navigateByUrl('/auth/login');
    }
    else {
      this.showErrors = true;
      console.log('not valid');
      
    }
  }

}


export function sha1(str) {
  let System: any;

  let hash
  try {
    let crypto = System.import('crypto')
    let sha1sum = crypto.createHash('sha1')
    sha1sum.update(str)
    hash = sha1sum.digest('hex')
  } catch (e) {
    hash = undefined
  }
  if (hash !== undefined) {
    return hash
  }
  let _rotLeft = function (n, s) {
    let t4 = (n << s) | (n >>> (32 - s))
    return t4
  }
  let _cvtHex = function (val) {
    let str = ''
    let i
    let v
    for (i = 3; i >= 0; i--) {
      v = (val >>> (i * 8)) & 0xff
      str += String.fromCharCode(v)
    }
    return str
  }
  let blockstart
  let i, j
  let W = new Array(80)
  let H0 = 0x67452301
  let H1 = 0xEFCDAB89
  let H2 = 0x98BADCFE
  let H3 = 0x10325476
  let H4 = 0xC3D2E1F0
  let A, B, C, D, E
  let temp
  // utf8_encode
  str = unescape(encodeURIComponent(str))
  let strLen = str.length
  let wordArray = []
  for (i = 0; i < strLen - 3; i += 4) {
    j = str.charCodeAt(i) << 24 |
      str.charCodeAt(i + 1) << 16 |
      str.charCodeAt(i + 2) << 8 |
      str.charCodeAt(i + 3)
    wordArray.push(j)
  }
  switch (strLen % 4) {
    case 0:
      i = 0x080000000
      break
    case 1:
      i = str.charCodeAt(strLen - 1) << 24 | 0x0800000
      break
    case 2:
      i = str.charCodeAt(strLen - 2) << 24 | str.charCodeAt(strLen - 1) << 16 |
        0x08000
      break
    case 3:
      i = str.charCodeAt(strLen - 3) << 24 |
        str.charCodeAt(strLen - 2) << 16 |
        str.charCodeAt(strLen - 1) <<
        8 | 0x80
      break
  }
  wordArray.push(i)
  while ((wordArray.length % 16) !== 14) {
    wordArray.push(0)
  }
  wordArray.push(strLen >>> 29)
  wordArray.push((strLen << 3) & 0x0ffffffff)
  for (blockstart = 0; blockstart < wordArray.length; blockstart += 16) {
    for (i = 0; i < 16; i++) {
      W[i] = wordArray[blockstart + i]
    }
    for (i = 16; i <= 79; i++) {
      W[i] = _rotLeft(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1)
    }
    A = H0
    B = H1
    C = H2
    D = H3
    E = H4
    for (i = 0; i <= 19; i++) {
      temp = (_rotLeft(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) &
        0x0ffffffff
      E = D
      D = C
      C = _rotLeft(B, 30)
      B = A
      A = temp
    }
    for (i = 20; i <= 39; i++) {
      temp = (_rotLeft(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff
      E = D
      D = C
      C = _rotLeft(B, 30)
      B = A
      A = temp
    }
    for (i = 40; i <= 59; i++) {
      temp = (_rotLeft(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] +
        0x8F1BBCDC) & 0x0ffffffff
      E = D
      D = C
      C = _rotLeft(B, 30)
      B = A
      A = temp
    }
    for (i = 60; i <= 79; i++) {
      temp = (_rotLeft(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff
      E = D
      D = C
      C = _rotLeft(B, 30)
      B = A
      A = temp
    }
    H0 = (H0 + A) & 0x0ffffffff
    H1 = (H1 + B) & 0x0ffffffff
    H2 = (H2 + C) & 0x0ffffffff
    H3 = (H3 + D) & 0x0ffffffff
    H4 = (H4 + E) & 0x0ffffffff
  }
  temp = _cvtHex(H0) + _cvtHex(H1) + _cvtHex(H2) + _cvtHex(H3) + _cvtHex(H4)
  return temp;
}