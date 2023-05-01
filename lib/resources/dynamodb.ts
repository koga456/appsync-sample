import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
import { Construct } from 'constructs'

import { Environments } from '../environment'
export class Dynamodb {
  public todoTable: dynamodb.Table
  private readonly scope: Construct
  private readonly env: Environments

  constructor(scope: Construct, env: Environments) {
    this.scope = scope
    this.env = env
  }

  public createResources() {
    this.todoTable = new dynamodb.Table(this.scope, 'TodoTable', {
      tableName: `${this.env}-todo-table`,
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      partitionKey: {
        name: 'userId',
        type: dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: 'todoId',
        type: dynamodb.AttributeType.STRING,
      },
    })
  }
}
