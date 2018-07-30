## AWS EC2 - Elastic Compute Cloud

- provides auto-scaling computing power by letting you launch virtual server instances on Amazon's cloud
- removes the upfront cost of buying own hardware and managing resources
- console lets you configure the VM to your needs
- AMI Amazon Machine Image -> OS
- EBS (Elastic Block Store); EC2 must have a root volume which is usually transient and deleted when the instance is terminated
- Security Groups
- IP addressing

Billing per hour (or per gb for storage)
- instance types (on-demand, spot, reserved)
- instance optimized for compute, storage, memory, GPU, or general use
- region

## EBS (Elastic Block Store)
- storage volume for EC2 instances, like a hard drive
- persist independently from the life of the instance
- IOPS (i/o operations per second): unit of measure for storage speed

## S3 - Simple Storage Service
- Amazon's primary storage service
- Buckets (root-level folders), folders, objects (files)
- choose the region closest to minimize file transfer latency, OR closest to your customers if serving files to the customer

Billing per gb, based on region and storage class; also charges for requests (moving data in/out of S3)

