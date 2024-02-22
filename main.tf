provider "aws" {
  region = "us-west-2"
}

resource "aws_s3_bucket" "hotelmainterraform" {
  bucket = "hotelmainterraform"
}

resource "aws_s3_bucket_policy" "hotelmainterraform_policy" {
  bucket = aws_s3_bucket.hotelmainterraform.id

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
      {
          "Sid": "PublicReadGetObject",
          "Effect": "Allow",
          "Principal": "*",
          "Action": "s3:GetObject",
          "Resource": "arn:aws:s3:::hotelmainterraform/*"
      }
  ]
}
POLICY
}
