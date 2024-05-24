import{g as e}from"./index_767de702_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";import"./blockString_ae762cd0_r24-02-0_b0_t240129-161140.js";const n=e`mutation cancelOrder($cartGuid: String!, $cancelReason: String!, $cancelReasonOther: String ) {
        cancelOrder(cartGuid: $cartGuid, cancelReason: $cancelReason, cancelReasonOther: $cancelReasonOther ) {
            canceled
            errorCode
            orderCode
          }
}`;export{n as default};
