const message = [
  "以下を確認しましたか？",
  "",
  "・相手が必要としているコメントか",
  "・不適切/不要な表現が含まれないか",
  "・相手が読んだ状況を思い描いたか",
];


$(function() {
  const submitButton = $("#switchStatusAddCommentForm").children("div:eq(1)").children("div:eq(1)").children("ul").children("li:eq(2)")[0];
  submitButton.addEventListener("click", function(e) {
    const isMentionMessage = $("#leftCommentContent").find("span.at-mention-node").length > 0;
    const confirmMessage = message.join("\r\n");

    if (isMentionMessage) {
      // メンションが含まれる場合
      if (!confirm(confirmMessage)) {
        // 警告メッセージを満たしたか(キャンセル時以下処理)
        e.stopPropagation();
        e.preventDefault();
        return false;
      }
    }
  });
})

