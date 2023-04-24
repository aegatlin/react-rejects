#!/usr/bin/env node

import {writeFileSync} from 'node:fs'
import {Classes, getClasses} from './classes'

const themePath = process.argv[1]

const classes: Classes = getClasses()