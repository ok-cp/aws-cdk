#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { InfraDevelopStack } from '../lib/develop/infra-develop-stack';
import { InfraDevelopEksStack } from '../lib/develop/infra-develop-eks-stack';
import { InfraEksContainerStack } from '../lib/develop/infra-develop-eks-container-stack';
import { Vpc } from '@aws-cdk/aws-ec2';

const app = new cdk.App();
const primaryRegion = {account: 'account', region: 'ap-northeast-2'};

// Network(Vpc, Route53) Stack 
const DevelopStack = new InfraDevelopStack(app, 'infra-develop', {
    primaryRegion,
});

// EKS Stack
const DevelopEksStack = new InfraDevelopEksStack(app, 'eks', {
    primaryRegion,
    infraStack: DevelopStack,
});

// EKS Container Stack
new InfraEksContainerStack(app, 'eks-container', {
    primaryRegion,
    eksStack: DevelopEksStack,
});