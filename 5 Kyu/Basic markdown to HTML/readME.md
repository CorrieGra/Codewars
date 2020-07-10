# Task
> You've been given some texts for your website which you need to turn into HTML. Unfortunately for you, the texts also contain markdown, which you need to take account of too. In this Kata you'll write a function "format()" which can transform 3 elements of standard markdown language to HTML:

```
Bullet points
Headers (levels 1 through 6)
Bold emphasis
You can find the full specs of markdown language here http://daringfireball.net/projects/markdown/syntax

Basic instructions
Strong emphasis
Non-empty text surrounded by double asterisks should be wrapped in strong tags. Compared to actual Markdown which takes the biggest match (greedy), we'll instead take the smallest possible matches.

For example:

**I'm a string with strong emphasis**

...should be converted to:

< strong>I'm a string with strong emphasis< /strong>

and

******

...should be converted to:

< p>< strong>*< /strong>*< /p>

Headers
Hashtags at the beginning of a string denote headers. The number of hashtags translates to the level of the header. They're always followed by a space.

You may be presented with headers level 1 through 6. If you see 7 or more hashtags at the beginning of a string, disregard all hashtags beyond the sixth one.


# this is a level one header - wrap me in < h1>< /h1>

## this is a level two header - wrap me in < h2>< /h2>

### this is a level three header - wrap me in < h3>< /h3>

and so on.
```

```
###List items
List items are marked with an asterisk in the front and always followed by a space:
this is a list item, wrap me in < li>< /li>
```

```
###Paragraphs
If the string is neither a header nor a list item, wrap it in "p" tags
< p>I am a regular paragraph< /p>

## Remove extra spaces
Finally, the formatted string should be returned with no spaces between the outside opening and closing HTML tags and the start and end of the rest of your string.
```


### Note about HTML tags
> I've found that Codewars reacts unpredictably to HTML within strings in Kata, and the tests don't always come out as expected. For this reason, I've added an extra space inside all HTML tags - as you can see both in the text cases and in the examples above.

