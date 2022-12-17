// Copyright 2022 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

function f(x) {
  for (let i = 0; i < 1; ++i) {
    x ^= x;
  }
  return x;
}

%PrepareFunctionForOptimization(f);
f(1n);
%OptimizeFunctionOnNextCall(f);
f(1n);
