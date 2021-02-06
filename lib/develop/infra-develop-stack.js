"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfraDevelopStack = void 0;
const cdk = require("@aws-cdk/core");
const ec2 = require("@aws-cdk/aws-ec2");
class InfraDevelopStack extends cdk.Stack {
    constructor(scope, id, props) {
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
    get availabilityZones() {
        return ['ap-northeast-2a', 'ap-northeast-2b', 'ap-northeast-2c'];
    }
}
exports.InfraDevelopStack = InfraDevelopStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mcmEtZGV2ZWxvcC1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZnJhLWRldmVsb3Atc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXFDO0FBQ3JDLHdDQUF3QztBQUd4QyxNQUFhLGlCQUFrQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBTzlDLFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDbEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7WUFDbkMsSUFBSSxFQUFFLGVBQWU7WUFDckIsa0JBQWtCLEVBQUUsSUFBSTtZQUN4QixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLE1BQU0sRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTTtZQUNyQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUM3QyxpQkFBaUIsRUFBRSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUU7WUFDaEQsbUJBQW1CLEVBQUU7Z0JBQ25CO29CQUNFLFFBQVEsRUFBRSxFQUFFO29CQUNaLElBQUksRUFBRSxRQUFRO29CQUNkLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU07aUJBQ2xDO2dCQUNEO29CQUNFLFFBQVEsRUFBRSxFQUFFO29CQUNaLElBQUksRUFBRSxTQUFTO29CQUNmLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU87aUJBQ25DO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFFTCxDQUFDO0lBNUJELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Q0EyQkY7QUFoQ0QsOENBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBlYzIgZnJvbSAnQGF3cy1jZGsvYXdzLWVjMic7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEluZnJhRGV2ZWxvcFN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcclxuICByZWFkb25seSB2cGM6IGVjMi5JVnBjO1xyXG5cclxuICBnZXQgYXZhaWxhYmlsaXR5Wm9uZXMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIFsnYXAtbm9ydGhlYXN0LTJhJywgJ2FwLW5vcnRoZWFzdC0yYicsICdhcC1ub3J0aGVhc3QtMmMnXTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XHJcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcclxuXHJcbiAgICBjb25zdCB2cGMgPSBuZXcgZWMyLlZwYyh0aGlzLCAnVlBDJywge1xyXG4gICAgICBjaWRyOiAnMTAuMTEwLjAuMC8xNicsXHJcbiAgICAgIGVuYWJsZURuc0hvc3RuYW1lczogdHJ1ZSxcclxuICAgICAgZW5hYmxlRG5zU3VwcG9ydDogdHJ1ZSxcclxuICAgICAgbWF4QXpzOiB0aGlzLmF2YWlsYWJpbGl0eVpvbmVzLmxlbmd0aCxcclxuICAgICAgbmF0R2F0ZXdheVByb3ZpZGVyOiBlYzIuTmF0UHJvdmlkZXIuZ2F0ZXdheSgpLFxyXG4gICAgICBuYXRHYXRld2F5U3VibmV0czogeyBzdWJuZXRHcm91cE5hbWU6ICdQdWJsaWMnIH0sXHJcbiAgICAgIHN1Ym5ldENvbmZpZ3VyYXRpb246IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjaWRyTWFzazogMjAsXHJcbiAgICAgICAgICBuYW1lOiAnUHVibGljJyxcclxuICAgICAgICAgIHN1Ym5ldFR5cGU6IGVjMi5TdWJuZXRUeXBlLlBVQkxJQyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNpZHJNYXNrOiAyMCxcclxuICAgICAgICAgIG5hbWU6ICdQcml2YXRlJyxcclxuICAgICAgICAgIHN1Ym5ldFR5cGU6IGVjMi5TdWJuZXRUeXBlLlBSSVZBVEUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG5cclxuICB9XHJcbn1cclxuIl19