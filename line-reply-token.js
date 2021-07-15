module.exports = function (RED) {
  function ReplyToken(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on("input", function (msg) {
      // msg.payload = msg.payload.events[0].replyToken;
      msg.replyToken = msg.payload.events[0].replyToken;
      node.send(msg);
    });
  }
  RED.nodes.registerType("line-reply-token", ReplyToken);
};
