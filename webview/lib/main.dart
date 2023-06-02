import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

void main() {
  runApp(const MaterialApp(
    home: WebViewApp(),
  ));
}

const homeUrl = 'https://todo-app-ikdq.vercel.app';
const demoUrl = 'https://flutter.dev';

class WebViewApp extends StatelessWidget {
  const WebViewApp({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("웹뷰"),
      ),
      body: const WebView(
          initialUrl: homeUrl, javascriptMode: JavascriptMode.unrestricted),
    );
  }
}
