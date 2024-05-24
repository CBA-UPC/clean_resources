import{g as e}from"./index_767de702_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";import"./blockString_ae762cd0_r24-02-0_b0_t240129-161140.js";const r=e`mutation unsubscribeFromMailList($email: String!, $source: String!){
    unsubscribeFromMailList(email: $email, source: $source) {
        recordData {
            fieldNames,
            records,
            mapTemplateName
        },
        mergeRule {
            textValue,
            insertOnNoMatch,
            updateOnMatch,
            matchOperator,
            matchColumnName3,
            matchColumnName1,
            matchColumnName2,
            optinValue,
            optoutValue,
            rejectRecordIfChannelEmpty,
            htmlValue,
            defaultPermissionStatus
        },
        links {
            rel,
            href,
            method
        }
    }
}`;export{r as default};
