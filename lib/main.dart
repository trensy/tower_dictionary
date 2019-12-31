import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

void main()=>runApp(new MyApp());

class MyApp extends StatelessWidget{

  Widget build(BuildContext context){

      return new MaterialApp(
        title: "welcome flutter",
        home:new Scaffold(
          appBar: new AppBar(
            title:new Text("welcome")
          ),
          body:new Center(
            child:RandomWords()
          )
        )
      );
  }


}

class RandomWordsState extends State<RandomWords>{

  final _suggestions = <WordPair>[];
  final _biggerFont = const TextStyle(fontSize: 18.0);

  Widget _buildSuggestions(){
    return ListView.builder(
      padding: const EdgeInsets.all(16.0),
      itemBuilder: (content,i ){
        if(i.isOdd) return Divider();

        final index = i ~/2;
        if(index >= _suggestions.length){
            _suggestions.addAll(generateWordPairs().take(10));
        }
        return _buildRow(_suggestions[index]);
      },
    );
  }

  Widget _buildRow(WordPair pair){

      return ListTile(
         title: Text(
           pair.asPascalCase,
           style:_biggerFont
         ),
      );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("StartUp"),
      ),
      body: _buildSuggestions(),
    );
  }

}

class RandomWords extends StatefulWidget {
  RandomWordsState createState() => RandomWordsState();
}