import express = require('express');
import {getConnectionManager} from "typeorm";

import { User } from '../../db/User'
import { Session } from '../../db/Session'

export function LoginRequired(target: any, key: any, descriptor: any) {

  // save a reference to the original method this way we keep the values currently in the
  // descriptor and don't overwrite what another decorator might have done to the descriptor.
  if(descriptor === undefined) {
    descriptor = Object.getOwnPropertyDescriptor(target, key);
  }
  var originalMethod = descriptor.value;

  //editing the descriptor/value parameter
  descriptor.value = async function () {
    // get args
    var args: any[] = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i - 0] = arguments[_i];
    }

    if(args[0]['user']) {
      return originalMethod.apply(this, args);
    } else {
      args[1].send('auth failed');
    }
  };

  // return edited descriptor as opposed to overwriting the descriptor
  return descriptor;
}
