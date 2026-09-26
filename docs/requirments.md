    # ngl app [anonimause massgae app]
# NGL APP [anonymous-messaging-app]

* send anonymous messages or public messages.
* view a profile with related messages.
* handle manage messages.

  - tech stack:
    - express
    - javascript
    - mongodb/mongoose
    - redis [caching]
    - nodemailer [email]
    - jwt [authentication]
    - bcrypt [password hash]
    - oauth2 [google]
    - validation [Zod,Joi,Yup,class-validator]
    - error handling [AppError]
    - rate limiting.
    - load balancer.

  - features:
  - authentication flow:
      - register
      - verify email using OTP.
      - login.
      - reset password.
      - send OTP.
      - login with Google.
      - logout.
  - message flow:
      - send a message. [anonymous – public]
      - view message.
      - delete message. [soft-delete/archive]
  - user flow [me]:
      - view profile.[me]
      - edit profile.[me]
      - delete profile.[me]
  - guards:  
  - authentication.[token]