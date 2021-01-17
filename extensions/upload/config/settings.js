const MINIO_PUBLIC_KEY = process.env.MINIO_PUBLIC_KEY
const MINIO_PRIVATE_KEY = process.env.MINIO_PRIVATE_KEY
const MINIO_URL = process.env.MINIO_URL
const MINIO_BUCKET = process.env.MINIO_BUCKET


if (!MINIO_PUBLIC_KEY) throw new Error('MINIO_PUBLIC_KEY env is required!');
if (!MINIO_PRIVATE_KEY) throw new Error('MINIO_PRIVATE_KEY env is required!');
if (!MINIO_URL) throw new Error('MINIO_URL env is required!');
if (!MINIO_BUCKET) throw new Error('MINIO_BUCKET env is required!');

module.exports = {
  "provider": "m3-minio",
  "providerOptions": {
    "public": MINIO_PUBLIC_KEY,
    "private": MINIO_PRIVATE_KEY,
    "endpoint": MINIO_URL,
    "bucket": MINIO_BUCKET
  }
}