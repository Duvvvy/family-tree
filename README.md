Thanks for having a look at this repo.

I spent around 3 hours total, for the first two hours I created the nodes and a typescript/styled components base app and implemented a simple list render.

After that I got really busy all week, and this morning I spent another hour taking a react-flow-renderer example from their site and implementing a tree render.

If I had more time I would have created a programatic way of converting your format of tree data into something that the react-flow-renderer could parse. Normally however I would not do this on FE, and prefer to do this kind of heavy data manipulation on BE somewhere.

I would also probably focus on testing the layouts even more, as well as writing tests for the data conversion.

The files TreeLayout, TreePage.css and TreeData borrow heavily from the react-flow-renderer examples on their documentation. Everything from before this commit was solely my work, although I did modify these three files quite a lot from their examples given.

The reason I went with react-flow-renderer is because I have used it extensively in the past.
