Extracted out following pieces of text from AWS documentations to understand the concept.

Problem Statement  
restrict access to documents, business data, media streams, or content that is intended for selected users

Signed URLs or Signed Cookies  
You must use RSA-SHA1 for signing URLs or cookies. CloudFront doesn't accept other algorithms.

https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-overview.html#private-content-overview-s3

Create a key pair for a trusted key group  
openssl genrsa -out private_key.pem 2048  
openssl rsa -pubout -in private_key.pem -out public_key.pem  

You upload the public key (in the public_key.pem file) later.  


https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-trusted-signers.html  
you use the private key from the signer’s key pair to sign a portion of the URL or the cookie  

a trusted key group that you create in CloudFront  

The signer uses its private key to sign the URL or cookies, and CloudFront uses the public key to verify the signature.  

Signers are associated with cache behaviors. This allows you to require signed URLs or signed cookies for some files and not for others in the same distribution.  

For a distribution that you’re already using to distribute content, make sure you’re ready to start generating signed URLs and signed cookies before you add a signer. When you add a signer, CloudFront rejects requests that don’t include a valid signed URL or signed cookie.  


https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-choosing-signed-urls-cookies.html  
Use signed URLs in the following cases:  
You want to restrict access to individual files, for example, an installation download for your application.  
Your users are using a client (for example, a custom HTTP client) that doesn't support cookies.  

Signed URLs take precedence over signed cookies. If you use both signed URLs and signed cookies to control access to the same files and a viewer uses a signed URL to request a file, CloudFront determines whether to return the file to the viewer based only on the signed URL.  

https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-cookies.html
send three Set-Cookie headers to the viewer.  

If you specify the Domain parameter in a Set-Cookie header, specify the most precise value possible to reduce the potential for access by someone with the same root domain name. For example, app.example.com is preferable to example.com, especially when you don't control example.com. This helps prevent someone from accessing your content from www.example.com.  



