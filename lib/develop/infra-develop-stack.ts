import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';


export class InfraDevelopStack extends cdk.Stack {
  readonly vpc: ec2.IVpc;

  get availabilityZones(): string[] {
    return ['ap-northeast-2a', 'ap-northeast-2b', 'ap-northeast-2c'];
  }

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'VPC', {
      cidr: '10.110.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      maxAzs: this.availabilityZones.length,
      natGatewayProvider: ec2.NatProvider.gateway(),
      natGatewaySubnets: { subnetGroupName: 'Public' },
      subnetConfiguration: [
        {
          cidrMask: 20,
          name: 'Public',
          subnetType: ec2.SubnetType.PUBLIC,
        },
        {
          cidrMask: 20,
          name: 'Private',
          subnetType: ec2.SubnetType.PRIVATE,
        },
      ],
    });

  }
}
