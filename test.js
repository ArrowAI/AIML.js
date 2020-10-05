AIMLInterpreter = require('./AIMLInterpreter');

var aimlInterpreter = new AIMLInterpreter({name:'WireInterpreter', age:'42'});
aimlInterpreter.loadAIMLFilesIntoArray(['./test.aiml.xml']);

var callback = function(answer, wildCardArray, input){
    console.log(answer + ' | ' + wildCardArray + ' | ' + input);
};

var caseCallback = function(answer, wildCardArray, input){
  if (answer == this) {
    console.log(answer + ' | ' + wildCardArray + ' | ' + input);
  } else {
    console.log('ERROR:', answer);
    console.log('   Expected:', this.toString());
  }
};


// Test bot attributes
aimlInterpreter.findAnswerInLoadedAIMLFiles('What is your name?', 'en', callback);

// Test setting and getting variable values
aimlInterpreter.findAnswerInLoadedAIMLFiles('My name is Ben.', 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('What is my name?', 'en', callback);

// Test srai tag
aimlInterpreter.findAnswerInLoadedAIMLFiles('Who are you?', 'en', callback);

// Test random tag
aimlInterpreter.findAnswerInLoadedAIMLFiles('Give me a letter.', 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test srai in random.', 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test wildcard What is my name?', 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test multiple beautiful wildcards you are', 'en', callback);

// Test sr tag
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test sr tag What is my name?', 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test sr in random What is my name?', 'en', callback);

// Test star tag
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test the star tag repeat what I said', 'en', callback);

// Test that tag
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test the that tag', 'en', callback)
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test that-tag. match', 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test that-tag. dont match', 'en', callback);

// Test condition tag
aimlInterpreter.findAnswerInLoadedAIMLFiles('What is your feeling today?', 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('How are you feeling today?', 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('Tell me about your feelings', 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles("You feel crumpy", 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('What is your feeling today?', 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles("You feel happy", 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('How are you feeling today?', 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('What is your feeling today?', 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('Tell me about your feelings', 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles("You feel sad", 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('How are you feeling today?', 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('What is your feeling today?', 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('Tell me about your feelings', 'en', callback);

// Test wildcards
aimlInterpreter.findAnswerInLoadedAIMLFiles('Explain HANA', 'en', callback);

//Test Think tag
aimlInterpreter.findAnswerInLoadedAIMLFiles('I am 123', 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('How old am I?', 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('What do you know about me?', 'en', callback);

//Test condition and srai
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test condition and srai', 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles("You feel happy", 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test condition and srai', 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles("You feel crumpy", 'en', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test condition and srai', 'en', callback);

// Test finding nothing
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test the wildcard pattern!', 'en', callback);

// Case insensitive testing
aimlInterpreter.findAnswerInLoadedAIMLFiles('You feel BAD', 'en', caseCallback.bind('I feel BAD!'));
aimlInterpreter.findAnswerInLoadedAIMLFiles('You feel good', 'en', caseCallback.bind('I feel good!'));
aimlInterpreter.findAnswerInLoadedAIMLFiles('You feel hAPPy', 'en', caseCallback.bind('I feel HAPPy!')); // INTENTIONAL ERROR CHECKING
aimlInterpreter.findAnswerInLoadedAIMLFiles('You feel FINEeeeee', 'en', caseCallback.bind('I feel FINEEEEEE!')); // INTENTIONAL ERROR CHECKING
