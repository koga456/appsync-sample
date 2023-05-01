#!/usr/bin/env node
import 'source-map-support/register'

import * as cdk from 'aws-cdk-lib'
import { Tags } from 'aws-cdk-lib'

import { AppsyncSampleStack } from '../lib/appsync-sample-stack'
import { Environments } from '../lib/environment'

const app = new cdk.App()

const env: Environments = app.node.tryGetContext('env') as Environments
if (!env) throw new Error('Invalid env environment')

new AppsyncSampleStack(app, 'AppsyncSampleStack', env, {
  stackName: `${env}-appsync-sample-stack`,
  description: `This stack is for Appsync Sample ${env} environment`,
})

Tags.of(app).add('env', env)
Tags.of(app).add('app', 'appsync-sample')
