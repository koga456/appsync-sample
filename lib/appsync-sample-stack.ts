import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'

import { Environments } from './environment'
import { Dynamodb } from './resources/dynamodb'

export class AppsyncSampleStack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    env: Environments,
    props?: cdk.StackProps,
  ) {
    super(scope, id, props)

    const dynamodb = new Dynamodb(this, env)
    dynamodb.createResources()
  }
}
