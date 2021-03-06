import {
    CompletionItem,
    CompletionItemKind,
    MarkdownString,
    SnippetString
} from 'vscode';

export const ifSocketConnectionCompletionItems: CompletionItem[] = [
    {
        kind: CompletionItemKind.Method,
        label: 'Listen',
        insertText: new SnippetString('Listen(${1:backlog as Integer})'),
        documentation: new MarkdownString(
`
    Listen(backlog as Integer) as Boolean

Returns true if listen can be done (generally if bound address is valid)
`
        )
    },
    {
        kind: CompletionItemKind.Method,
        label: 'IsListening',
        insertText: new SnippetString('IsListening()'),
        documentation: new MarkdownString(
`
    IsListening() as Boolean

Returns true if listen has been successfully called on this socket
`
        )
    },
    {
        kind: CompletionItemKind.Method,
        label: 'Connect',
        insertText: new SnippetString('Connect()'),
        documentation: new MarkdownString(
`
    Connect() as Boolean

Returns returns true connect is successful.

Still might not be complete if socket is non-blocking
`
        )
    },
    {
        kind: CompletionItemKind.Method,
        label: 'Accept',
        insertText: new SnippetString('Accept()'),
        documentation: new MarkdownString(
`
    Accept() as Object

Returns an roStreamSocket if connection is pending, invalid otherwise.

Use status to distinguish among success (eSuccess() or isConnected()), not ready (eOK()), and error.
`
        )
    },
    {
        kind: CompletionItemKind.Method,
        label: 'IsConnected',
        insertText: new SnippetString('IsConnected()'),
        documentation: new MarkdownString(
`
    IsConnected() as Boolean

Returns true if a connect or accept has successfully completed on this socket
`
        )
    }
];
