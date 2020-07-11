function format(string) {
    //your code goes here!

    // const options = {
    //     markdown: /^([a-zA-Z]|[#*])/im.exec(string)[0],
    //     count: [.../^([a-zA-Z]|[#*]{1,})/im.exec(string)[0]].length
    // }

    let formattedString = string;
    const checks = {
        "h": (string) => {
            const count = /^#+/gm.exec(string)[0].length;
            return formattedString = string
            .replace(/[#{1,}][\s\S]*$/gim.exec(string) ,`<h${count}>${/[^#{1,}][\s\S]*$/gim.exec(string)
            .join()
            .trim()}</h${count}>`);
        },
        "strong": (string) => {
            const count = /(\*)*/gi.exec(string).length;
            console.log(count)
            console.log(/\*{1,}(.+[^\*])\*{1,}/gi.exec(string))
        }
    }

    Object.values(checks).forEach((check) => check(formattedString));
    return formattedString;
}


// console.log(format('## consectetur adipiscing elit. Integer a neque eros. Integer pellentesque leo'))
// console.log(format('### sed, viverra'), '< h3>sed, viverra< /h3>', 'Should work for level-3 header');
// Test.assertEquals(format('#### Class aptent'), '< h4>Class aptent< /h4>', 'Should work for level-4 header');
// Test.assertEquals(format('##### rutrum mi eu, finibus interdum tortor. Class aptent taciti sociosqu ad'), '< h5>rutrum mi eu, finibus interdum tortor. Class aptent taciti sociosqu ad< /h5>', 'Should work for level-5 header');
// Test.assertEquals(format('###### pellentesque leo ac blandit luctus. Sed a eros eget arcu laoreet'), '< h6>pellentesque leo ac blandit luctus. Sed a eros eget arcu laoreet< /h6>', 'Should work for level-6 header');
// Test.assertEquals(format('####### Maecenas erat dolor, euismod rutrum mi eu, finibus interdum tortor.'), '< h6># Maecenas erat dolor, euismod rutrum mi eu, finibus interdum tortor.< /h6>', 'Should for strings starting with more than 6 hashtags');
// Test.assertEquals(format('* eget'), '< li>eget< /li>', 'Should work for list items');
// Test.assertEquals(format('**ad litora torquent per conubia nostra, per inceptos himenaeos.**'), '< p>< strong>ad litora torquent per conubia nostra, per inceptos himenaeos.< /strong>< /p>', 'Should work for strings with emphasis');
console.log(format('# **ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas rutrum nisl eu**'))
// Test.assertEquals(format('* **pellentesque**'), '< li>< strong>pellentesque< /strong>< /li>', 'Should work for strings with emphasis');
// Test.assertEquals(format('suscipit. Maecenas ac urna tincidunt, **fermentum** massa sed, viverra elit. Maecenas'), '< p>suscipit. Maecenas ac urna tincidunt, < strong>fermentum< /strong> massa sed, viverra elit. Maecenas< /p>', 'Should work for strings with partial emphasis');
// Test.assertEquals(format('# rutrum mi eu, **finibus interdum** tortor. Class aptent'), '< h1>rutrum mi eu, < strong>finibus interdum< /strong> tortor. Class aptent< /h1>', 'Should work for strings with partial emphasis');
// Test.assertEquals(format('* elit. Maecenas **e**rat dolor,'), '< li>elit. Maecenas < strong>e< /strong>rat dolor,< /li>', 'Should work for strings with partial emphasis');
// Test.assertEquals(format('eros eget arcu **laoreet** suscipit. Maecenas ac urna tincidunt, **fermentum** massa sed, viverra'), '< p>eros eget arcu < strong>laoreet< /strong> suscipit. Maecenas ac urna tincidunt, < strong>fermentum< /strong> massa sed, viverra< /p>', 'Should work for strings where 2 parts of the string are emphasized');
// Test.assertEquals(format('# pellentesque leo ac **blandit luctus**. Sed a eros eget **arcu laoreet suscipit. Maecenas ac**'), '< h1>pellentesque leo ac < strong>blandit luctus< /strong>. Sed a eros eget < strong>arcu laoreet suscipit. Maecenas ac< /strong>< /h1>', 'Should work for strings where 2 parts of the string are emphasized');
// Test.assertEquals(format('* **himenaeos. Maecenas** rutrum **nisl eu** bibendum sodales'), '< li>< strong>himenaeos. Maecenas< /strong> rutrum < strong>nisl eu< /strong> bibendum sodales< /li>', 'Should work for strings where 2 parts of the string are emphasized');
// Test.assertEquals(format('rutrum mi e*u, finibus **inter**dum**'), '< p>rutrum mi e*u, finibus < strong>inter< /strong>dum**< /p>', 'Should work when string contains random asterisks');
// Test.assertEquals(format('****'), '< p>****< /p>', 'Compound asterisks 1');
// Test.assertEquals(format('*****'), '< p>< strong>*< /strong>< /p>', 'Compound asterisks 2');
// Test.assertEquals(format('* ** *** **** *****'), '< li>< strong> < /strong>* < strong>** < /strong>***< /li>', 'Compound asterisks 3');
// Test.assertEquals(format('***** **** *** ** *'), '< p>< strong>*< /strong> < strong>** < /strong>* ** *< /p>', 'Compound asterisks 4');