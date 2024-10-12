%{
#include <stdio.h>
%}

%%

[0-9]+        printf("TOKEN: INTEGER, VALUE: %s\n", yytext);
[a-zA-Z_][a-zA-Z0-9_]*    printf("TOKEN: IDENTIFIER, VALUE: %s\n", yytext);
"="           printf("TOKEN: ASSIGNMENT OPERATOR, VALUE: %s\n", yytext);
"+"           printf("TOKEN: PLUS OPERATOR, VALUE: %s\n", yytext);
"-"           printf("TOKEN: MINUS OPERATOR, VALUE: %s\n", yytext);
"*"           printf("TOKEN: MULTIPLICATION OPERATOR, VALUE: %s\n", yytext);
"/"           printf("TOKEN: DIVISION OPERATOR, VALUE: %s\n", yytext);
";"           printf("TOKEN: SEMICOLON, VALUE: %s\n", yytext);

[ \t\n]+      /* Ignore whitespace */
.             printf("TOKEN: UNKNOWN, VALUE: %s\n", yytext);

%%

int main() {
    yylex();
    return 0;
}

int yywrap() {
    return 1;
}
