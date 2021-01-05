let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//Split all the words and save them into a new array
const storyWords = story.split(' ');
//Prints the amount of words stored in the array
console.log(`Words in story: ${storyWords.length}`);

const betterWords = storyWords.filter(word => !unnecessaryWords.includes(word))

//Count the amount of each overused word and print to console
overusedReally = 0;
overusedVery = 0;
overusedActually = 0;

for (word of storyWords) {
if (word === overusedWords[0]){
  overusedReally += 1
}
else if (word == overusedWords[1]){
  overusedVery += 1
}
else if (word == overusedWords[2]){
  overusedActually += 1
}}

console.log(`'Really' count: ${overusedReally}`)
console.log(`'Very' count: ${overusedVery}`)
console.log(`'Actually' count: ${overusedActually}`)

let sentences = 0;

storyWords.forEach(word => {
  if(word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences += 1
  }
})

console.log(`Sentences count: ${sentences}`)

console.log(betterWords.join(' '));