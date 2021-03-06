test("should sort channels by name", function(assert) {
  var channels = [
    {friendlyName: "BBB"},
    {friendlyName: "BBA"}
  ];

  var result = twiliochat.sortChannelsByName(channels)

  assert.deepEqual(result, [{friendlyName: "BBA"}, {friendlyName: "BBB"}]);
});

test("should be able to sort an empty list of channels", function(assert) {
  var channels = [];

  var result = twiliochat.sortChannelsByName(channels)

  assert.deepEqual(result, []);
});

test("should sort channels when they have same name", function(assert) {
  var channels = [
    {friendlyName: "BBB"},
    {friendlyName: "BBA"},
    {friendlyName: "BBA"}
  ];

  var result = twiliochat.sortChannelsByName(channels);

  assert.deepEqual(result, [{friendlyName: "BBA"}, {friendlyName: "BBA"}, {friendlyName: "BBB"}]);
});

test("should be able to add messages to chat", function(assert) {
  var message = {
    body: "just a test message",
    author: "me",
    timestamp: new Date()
  }
  var messageList = twiliochat.$messageList;
  twiliochat.addMessageToList(message);

  assert.ok(messageList.html().indexOf("just a test message") > -1, messageList.html());
});

test("should create a general channel when there is not one", function(){
 var messagingClientMock = { createChannel: function () {} };
 var mock = sinon.mock(messagingClientMock);
 twiliochat.messagingClient = messagingClientMock;
 mock.expects("createChannel").once().returns({ then: function(){} });
 twiliochat.generalChannel = undefined;
 twiliochat.joinGeneralChannel();

 mock.verify();
 ok(true);
});

test("should not create a new general channel if it already has one", function(){
 var messagingClientMock = { createChannel: function () {} };
 var mock = sinon.mock(messagingClientMock);
 twiliochat.messagingClient = messagingClientMock;
 mock.expects("createChannel").never().returns({then: function(){} });
 twiliochat.generalChannel = {join: function(){ return {then: function() {}}}};
 twiliochat.joinGeneralChannel();

 mock.verify();
 ok(true);
});

test("should create a new channel when requested by the user", function(){
  var messagingClientMock = { createChannel: function () {} };
  var mock = sinon.mock(messagingClientMock);
  twiliochat.messagingClient = messagingClientMock;
  mock.expects("createChannel").once().returns({ then: function(){} });

  twiliochat.handleNewChannelInputKeypress({keyCode: 13, preventDefault: function() {}});

  mock.verify();
  ok(true);
});

test("should retrieve list of channels", function() {
  var messagingClientMock = {getChannels: function(){} };
  var mock = sinon.mock(messagingClientMock);
  twiliochat.messagingClient = messagingClientMock;
  mock.expects("getChannels").once().returns({then: function(){} });

  twiliochat.loadChannelList();

  mock.verify();
  ok(true);
});
