# [Ghost 4.X](https://github.com/TryGhost/Ghost) on [Heroku](https://heroku.com)
Ghost is world's most popular modern publishing platform for creating a new media platform. It has been used by Apple, SkyNews, Buffer, OpenAI, and thousands more.
You can visit the project's website at <a href="https://ghost.org/" target="_blank">https://ghost.org</a>, or read the docs on <a href="https://ghost.org/docs" target="_blank">https://ghost.org/docs</a>.

### Deploy

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

> I am available to work with individuals or companies who are looking to build their blazingly super-fast publishing platform. [Contact-Me](https://bit.ly/getfastblog)


If the above button does not work for you, disable anything that might be blocking Heroku from inferring the referrer (e.g. Brave shield), or try this: https://heroku.com/deploy?template=https://github.com/thelovekesh/ghost-v4-on-heroku (if you're using a fork, make sure to point the template link to your repo).

**NOTE**: we do _not_ support deploying by downloading the source file or by copying over a cloned folder. Downloading/copying folders tends to break symlinks, so we recommend that you deploy by clicking the button in this repository or your fork on GitHub.

### Things you should know

After deployment,

- First, visit Ghost at `https://YOURAPPNAME.herokuapp.com/ghost` to set up your admin account
- The app may take a few minutes to come to life
- Your blog will be publicly accessible at `https://YOURAPPNAME.herokuapp.com`
- If you subsequently set up a [custom domain](https://devcenter.heroku.com/articles/custom-domains) for your blog, you’ll need to update your Ghost blog’s `APP_PUBLIC_URL` environment variable accordingly
- If you create a lot of content or decide to scale-up the dynos to support more traffic, a more substantial, paid database plan will be required.

### Configuring S3 file uploads

The blog is configured to use Cloudinary file storage by default. If you want to configure S3 file storage, create an S3 bucket on Amazon AWS, and then specify the following details as environment variables on the Heroku deployment page (or add these environment variables to your app after deployment via the Heroku dashboard):

- `S3_ACCESS_KEY_ID` and `S3_ACCESS_SECRET_KEY`: **Required if using S3 uploads**. These fields are the AWS key/secret pair needed to authenticate with Amazon S3. You must have granted this keypair sufficient permissions on the S3 bucket in question in order for S3 uploads to work.

- `S3_BUCKET_NAME`: **Required if using S3 uploads**. This is the name you gave to your S3 bucket.

- `S3_BUCKET_REGION`: **Required if using S3 uploads**. Specify the region the bucket has been created in, using slug format (e.g. `us-east-1`, `eu-west-1`). A full list of S3 regions is [available here](http://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region).

- `S3_ASSET_HOST_URL`: Optional, even if using S3 uploads. Use this variable to specify the S3 bucket URL in virtual host style, path style or using a custom domain. You should also include a trailing slash (example `https://my.custom.domain/`). See [this page](http://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html) for details.

Once your app is up and running with these variables in place, you should be able to upload images via the Ghost interface and they’ll be stored in Amazon S3. :sparkles:

### Setting up SMTP service

When you spin up your heroku dyno for the first time, mailgun is by default setup with a sandbox account. It means, sending emails to only authorized reciepients is supported. If you want to send emails / invite your collaborators you need to set their email in authorized recipient section on mailgun dashboard. See https://help.mailgun.com/hc/en-us/articles/217531258-Authorized-Recipients for more.

A more permanent solution would be to use a custom domain and verify your domain via mailgun customer support. Cheers!

FYI: You can access mailgun dashboard by visiting heroku dashboard > click on your app > resources tab > click on mailgun addon.

### Chnage Config Vars Value in Heroku
How can I change the value of `APP_PUBLIC_URL`, `MAILGUN_API_KEY`, `MAILGUN_DOMAIN`, `MAILGUN_PUBLIC_KEY`, `MAILGUN_SMTP_LOGIN`, `MYSQL_DATABASE_URL or JAWSDB_URL`, `S3_ACCESS_KEY_ID` ...etc?
You cannot change the value in the `config.production.json` but you can change the values using the `Heroku CLI` or `Heroku Dashboard`.
For more information read <a href="https://lovekesh.tech/how-to-create-update-and-delete-config-vars-in-the-heroku-app/" target="_blank">here</a>

### Disclaimer

This repo has some blocks of open-source code. I have taken that code from the repositories of the previous version of ghost deployment on Heroku. 

### Problems or need help?
- [Ask Question](https://ask.codebulbs.com/)
- [Open an Issue](https://github.com/thelovekesh/ghost-v4-on-heroku/issues/new/)
- [Use GitHub Discussions](https://github.com/thelovekesh/ghost-v4-on-heroku/discussions)

### License
Released under the [MIT license](https://github.com/thelovekesh/ghost-v4-on-heroku/blob/main/LICENSE), just like the Ghost project itself.

