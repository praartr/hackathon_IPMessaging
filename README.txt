1.First clone this repository and cd into its directory:

$ git clone https://github.com/praartr/hackathon_IPMessaging.git
$ cd hackathon_IPMessaging

2.Install project's dependencies:

$ npm install

3.Change .env file to your Twilio Credentials

$ cp .env.example .env

You can find your TWILIO_ACCOUNT_SID in your Twilio Account Settings. For TWILIO_API_KEY and TWILIO_API_SECRET you need to go here. 
There youl'll be able to create a new API key obtaining the two required values. 
For TWILIO_IPM_SERVICE_SID you can go here, where you must create an IP Messaging Service. 
When the service is created you'll have access to the service's SID.

4.Start the development server
$ npm start

5.Expose your localhost to the internet

$ ngrok http 3000