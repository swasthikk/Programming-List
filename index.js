const express = require("express");
const app = express();
const port= 8080;
const path= require("path");
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
const { v4: uuidv4 } = require('uuid');
uuidv4(); 
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

let posts = [
    {
        id: uuidv4(),
        username: "Python",
        content: "Python is a beginner-friendly, versatile language.",
        description: "Python is a high-level, interpreted programming language known for its clear and readable syntax, making it ideal for beginners. It is widely used in various domains such as web development, data science, machine learning, automation, scientific computing, and scripting. Its massive ecosystem of libraries and frameworks like Django, Flask, NumPy, Pandas, and TensorFlow enables rapid development and deployment of applications across different fields."
    },
    {
        id: uuidv4(),
        username: "JavaScript",
        content: "JavaScript powers dynamic behavior on websites.",
        description: "JavaScript is a versatile scripting language primarily used for building interactive web pages and dynamic web applications. It runs directly in the browser and allows developers to create responsive user interfaces, handle user events, and manipulate the DOM. With the rise of Node.js, JavaScript is now used for full-stack development, and its ecosystem includes powerful frameworks like React, Angular, and Vue. It’s the cornerstone of modern web development."
    },
    {
        id: uuidv4(),
        username: "Java",
        content: "Java is a robust, object-oriented language.",
        description: "Java is a statically typed, object-oriented programming language designed to be portable and secure. It follows the 'write once, run anywhere' philosophy, thanks to the Java Virtual Machine (JVM). Java is extensively used in large-scale enterprise applications, Android app development, backend systems, and distributed computing. Its mature ecosystem includes tools like Spring, Hibernate, and Maven, and it remains a top choice for developers building scalable and maintainable software systems."
    },
    {
        id: uuidv4(),
        username: "C++",
        content: "C++ is a high-performance, compiled language.",
        description: "C++ is an extension of the C language that incorporates object-oriented features like classes and inheritance. It offers fine-grained control over system resources and memory, making it ideal for systems programming, game development, real-time applications, and high-performance computing. C++ is used in developing operating systems, browsers, and embedded systems. Despite being complex, it provides unmatched performance and flexibility for demanding applications."
    },
    {
        id: uuidv4(),
        username: "Ruby",
        content: "Ruby is a dynamic, elegant language known for simplicity.",
        description: "Ruby is a high-level, dynamically typed, object-oriented programming language designed with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write. Ruby powers the popular web framework Ruby on Rails, which follows the convention over configuration principle and emphasizes rapid development. It is favored by startups and developers who want to build maintainable web applications quickly."
    },
    {
        id: uuidv4(),
        username: "Go",
        content: "Go is a fast, statically typed language by Google.",
        description: "Go, also known as Golang, is an open-source programming language developed by Google to address issues in scalability and performance for modern computing needs. It is statically typed, compiled, and known for its simplicity, concurrency support through goroutines, and fast execution. Go is widely used in cloud infrastructure, microservices, and backend development. It powers tools like Docker and Kubernetes and is praised for its efficiency and performance in networked systems."
    },
    {
        id: uuidv4(),
        username: "Rust",
        content: "Rust is a memory-safe systems programming language.",
        description: "Rust is a modern systems programming language focused on safety, speed, and concurrency. It eliminates entire classes of memory-related bugs through its ownership model and does so without sacrificing performance. Rust is gaining popularity for its ability to build reliable and efficient software for systems-level development, web assembly, and embedded systems. It’s used by major tech companies like Mozilla, Microsoft, and Dropbox for performance-critical applications."
    },
    {
        id: uuidv4(),
        username: "TypeScript",
        content: "TypeScript adds types to JavaScript for safer coding.",
        description: "TypeScript is a superset of JavaScript developed by Microsoft that introduces static typing to improve code reliability and maintainability. It compiles to plain JavaScript, making it compatible with all modern browsers and JavaScript frameworks. TypeScript enhances development with powerful features like interfaces, type inference, and advanced tooling support. It is widely used in large-scale web applications, especially in frameworks like Angular and React, to prevent runtime errors and improve developer experience."
    },
    {
        id: uuidv4(),
        username: "Kotlin",
        content: "Kotlin is a modern language for Android and JVM development.",
        description: "Kotlin is a statically typed programming language developed by JetBrains, designed to interoperate fully with Java. It's concise, expressive, and safe, reducing boilerplate code while maintaining readability. Kotlin is the preferred language for Android development and is officially supported by Google. It supports functional and object-oriented paradigms and brings features like null-safety, smart casts, and coroutines for asynchronous programming."
    },
    {
        id: uuidv4(),
        username: "Swift",
        content: "Swift is Apple's modern language for iOS and macOS apps.",
        description: "Swift is a fast, safe, and expressive programming language developed by Apple for building apps on iOS, macOS, watchOS, and tvOS. It features modern syntax, strong typing, and automatic memory management, making it more secure and easier to write than Objective-C. Swift supports functional and object-oriented programming and has become the go-to language for Apple ecosystem development thanks to its performance and developer-friendly features."
    },
    {
        id: uuidv4(),
        username: "PHP",
        content: "PHP is a server-side scripting language for web development.",
        description: "PHP (Hypertext Preprocessor) is a widely-used open-source scripting language especially suited for web development and embedding within HTML. It powers major websites and platforms like WordPress and Facebook. PHP runs on various platforms, supports many databases, and integrates easily with front-end technologies. While older versions had limitations, modern PHP is secure, fast, and capable, especially with frameworks like Laravel and Symfony."
    },
    {
        id: uuidv4(),
        username: "C#",
        content: "C# is a powerful language for Windows and game development.",
        description: "C# (pronounced 'C-sharp') is a modern, object-oriented programming language developed by Microsoft as part of its .NET framework. It is widely used for building Windows applications, enterprise software, and web APIs. C# is also the primary language used in Unity, one of the most popular game engines. With features like async programming, LINQ, and a strong type system, C# enables developers to build scalable and high-performance apps."
    },
    {
        id: uuidv4(),
        username: "R",
        content: "R is a language for statistical computing and data analysis.",
        description: "R is a language and environment designed specifically for statistical computing, data analysis, and visualization. It is widely used by statisticians, data scientists, and researchers for exploratory data analysis, machine learning, and statistical modeling. With extensive libraries like ggplot2, dplyr, and caret, R excels in generating detailed graphs and performing complex statistical operations. It’s a key tool in academic and analytical domains."
    },
    {
        id: uuidv4(),
        username: "SQL",
        content: "SQL is used to query and manage relational databases.",
        description: "SQL (Structured Query Language) is a domain-specific language designed to manage and manipulate relational databases. It allows users to create, retrieve, update, and delete data efficiently using simple declarative syntax. SQL is the backbone of database-driven applications, supporting powerful operations like joins, aggregations, and nested queries. Popular variants include MySQL, PostgreSQL, SQLite, and Microsoft SQL Server, all using SQL as their core query language."
    },
    {
        id: uuidv4(),
        username: "Shell",
        content: "Shell scripting automates tasks in Unix-based systems.",
        description: "Shell scripting involves writing scripts for Unix/Linux shells like Bash or Zsh to automate repetitive tasks such as file manipulation, system monitoring, backups, and software installation. It's essential for DevOps, system administration, and backend development. Shell scripts use command-line utilities and logic structures to control workflows efficiently, making them invaluable for automating infrastructure and simplifying deployment pipelines."
    },
    {
        id: uuidv4(),
        username: "Perl",
        content: "Perl excels at text processing and system scripting.",
        description: "Perl is a high-level, general-purpose programming language known for its powerful text processing capabilities and flexibility. Often described as the 'Swiss Army knife' of scripting languages, Perl was widely used in bioinformatics, CGI scripting, and network programming. It supports both procedural and object-oriented programming and is highly capable of manipulating complex data formats. Though its popularity has waned, Perl remains powerful in legacy systems and niche areas."
    },
    {
        id: uuidv4(),
        username: "MATLAB",
        content: "MATLAB is a high-level language for numerical computing.",
        description: "MATLAB (Matrix Laboratory) is a proprietary programming platform designed for engineers and scientists to analyze data, develop algorithms, and create models. It is especially strong in linear algebra, matrix computations, and simulations. MATLAB is extensively used in academic, research, and industrial settings, particularly for signal processing, control systems, and machine learning. Its interactive environment and toolboxes make complex mathematical modeling accessible."
    },
    {
        id: uuidv4(),
        username: "Haskell",
        content: "Haskell is a purely functional, statically typed language.",
        description: "Haskell is a statically typed, purely functional programming language with strong mathematical foundations. It supports lazy evaluation, higher-order functions, and strong static typing through its advanced type system. Haskell encourages immutability and declarative programming, making it highly expressive and reliable for concurrent systems, compilers, and academic research. Though it has a steep learning curve, it teaches valuable functional programming principles and is admired for its elegance."
    },
     {
        id: uuidv4(),
        username: "Scala",
        content: "Scala blends object-oriented and functional programming.",
        description: "Scala is a powerful language that integrates features of object-oriented and functional programming paradigms. It runs on the JVM and interoperates seamlessly with Java. Scala is widely used in data engineering and backend services, particularly in conjunction with Apache Spark. With its concise syntax and support for immutability, pattern matching, and higher-order functions, Scala enables expressive and maintainable code for large-scale systems."
    },
    {
        id: uuidv4(),
        username: "Elixir",
        content: "Elixir is a functional language for scalable applications.",
        description: "Elixir is a dynamic, functional language designed for building scalable and maintainable applications. It runs on the Erlang VM, known for its fault-tolerance and concurrency. Elixir is commonly used for real-time applications like messaging platforms and web services through its Phoenix framework. Its syntax is clean and Ruby-like, and it’s ideal for high-availability systems that require massive concurrency."
    },
    {
        id: uuidv4(),
        username: "Dart",
        content: "Dart is optimized for UI and powers Flutter apps.",
        description: "Dart is an open-source, general-purpose language developed by Google, optimized for building user interfaces. It is the primary language behind Flutter, a cross-platform UI toolkit for creating natively compiled mobile, web, and desktop applications. Dart emphasizes speed and developer productivity, featuring a familiar syntax, hot reload, and ahead-of-time (AOT) compilation for fast performance."
    },
    {
        id: uuidv4(),
        username: "Lua",
        content: "Lua is lightweight and great for game scripting.",
        description: "Lua is a fast, lightweight, and embeddable scripting language often used in game development, embedded systems, and extensible applications. It has a simple syntax, powerful data description constructs, and efficient performance. Lua is widely used in game engines like Roblox and World of Warcraft for scripting gameplay mechanics and customizing environments."
    },
    {
        id: uuidv4(),
        username: "Groovy",
        content: "Groovy simplifies Java development with dynamic features.",
        description: "Groovy is an agile, dynamic language for the Java platform that enhances Java's capabilities with features like closures, type inference, and scripting. It integrates seamlessly with existing Java code and is commonly used for scripting, testing (Spock), and build automation (Gradle). Groovy is concise, expressive, and developer-friendly, making it a popular choice for improving Java-based workflows."
    },
    {
        id: uuidv4(),
        username: "Julia",
        content: "Julia excels in high-performance scientific computing.",
        description: "Julia is a high-level, high-performance language for numerical analysis and scientific computing. It is designed to address the limitations of other languages in terms of speed and usability. Julia supports parallelism, just-in-time compilation, and distributed computing, making it ideal for tasks like machine learning, data analysis, and large-scale simulations. Its syntax is intuitive for users coming from Python or MATLAB."
    },
    {
        id: uuidv4(),
        username: "Objective-C",
        content: "Objective-C was the core language for iOS and macOS apps.",
        description: "Objective-C is an object-oriented programming language that served as the primary language for iOS and macOS development before Swift. It adds Smalltalk-style messaging to the C language and is known for its dynamic runtime and robustness. Despite Swift’s rise, Objective-C remains important for maintaining legacy Apple apps and frameworks. It also integrates well with C and C++ libraries."
    },
    {
        id: uuidv4(),
        username: "COBOL",
        content: "COBOL is used in legacy business and banking systems.",
        description: "COBOL (Common Business-Oriented Language) is one of the oldest programming languages, developed for business, finance, and administrative systems. It is known for its English-like syntax, making it readable and self-documenting. COBOL still powers critical applications in banking, insurance, and government sectors, and modernization efforts continue around its long-standing codebases."
    },
    {
        id: uuidv4(),
        username: "Fortran",
        content: "Fortran is a pioneer in scientific computing.",
        description: "Fortran (Formula Translation) is a compiled, imperative programming language that has been widely used for numerical and scientific computing since the 1950s. It excels in high-performance computing and remains relevant in domains like weather forecasting, aerospace, and computational physics due to its efficient handling of mathematical calculations and array-based data."
    },
    {
        id: uuidv4(),
        username: "Ada",
        content: "Ada is used in critical systems like aviation and defense.",
        description: "Ada is a statically typed, structured language designed for safety and reliability in embedded and real-time systems. It is widely used in aviation, defense, transportation, and medical devices. Ada emphasizes strong typing, modularity, and concurrency. Its robust toolchain supports the development of mission-critical software where failure is not an option."
    },
    {
        id: uuidv4(),
        username: "Crystal",
        content: "Crystal is a fast language with Ruby-like syntax.",
        description: "Crystal is a statically typed, compiled programming language that offers the elegance of Ruby with the performance of C. It uses LLVM for compilation, supports concurrency with fibers, and provides type inference for simplicity. Crystal is designed for developers who want readable code with blazing-fast execution speeds, making it ideal for web services and command-line tools."
    },
    {
        id: uuidv4(),
        username: "Erlang",
        content: "Erlang is built for concurrency and distributed systems.",
        description: "Erlang is a functional, concurrent language developed by Ericsson for building scalable and fault-tolerant telecom systems. Its lightweight processes, message-passing model, and 'let it crash' philosophy make it ideal for systems requiring high uptime. Erlang powers telecom switches, messaging systems, and web servers with extreme concurrency needs."
    },
    {
        id: uuidv4(),
        username: "F#",
        content: "F# is a functional-first language on .NET.",
        description: "F# is a functional-first, general-purpose language developed by Microsoft for the .NET ecosystem. It supports immutable data, pattern matching, and type inference, making it concise and expressive. F# is used in finance, data science, and enterprise systems, offering strong integration with existing .NET libraries and tools while promoting robust, maintainable code."
    },
    {
        id: uuidv4(),
        username: "Bash",
        content: "Bash is a command-line shell for Unix/Linux systems.",
        description: "Bash (Bourne Again SHell) is a Unix shell and scripting language used for command-line interaction, automation, and system configuration in Linux and macOS. It allows developers and system administrators to execute commands, write scripts, and automate tasks like backups, installations, and log monitoring. It’s essential in DevOps, Linux administration, and embedded systems."
    },
    {
        id: uuidv4(),
        username: "VB.NET",
        content: "VB.NET is a .NET language designed for easy application development.",
        description: "VB.NET (Visual Basic .NET) is an object-oriented language developed by Microsoft to simplify Windows and web application development within the .NET framework. It offers easy syntax, rapid application development, and strong integration with Visual Studio. While newer languages are more popular, VB.NET is still used in legacy enterprise systems and internal business tools."
    },
    {
        id: uuidv4(),
        username: "Assembly",
        content: "Assembly provides low-level control of hardware.",
        description: "Assembly language is a low-level programming language that provides direct control over a machine’s hardware. It’s specific to CPU architecture and often used for performance-critical components like bootloaders, embedded systems, and device drivers. Assembly allows for efficient resource usage but requires detailed knowledge of hardware, making it more complex and error-prone."
    },
    {
        id: uuidv4(),
        username: "Tcl",
        content: "Tcl is used for rapid prototyping and embedded scripting.",
        description: "Tcl (Tool Command Language) is a dynamic language known for its simplicity and extensibility. It is often used for rapid application development, GUI scripting (with Tk), and embedding into applications. Tcl excels in automation, test frameworks, and configuration scripts for tools like Cisco routers and software testing suites."
    },
    {
        id: uuidv4(),
        username: "Nim",
        content: "Nim offers Python-like syntax with C-like speed.",
        description: "Nim is a statically typed, compiled language that aims to be expressive, efficient, and elegant. It offers a Python-inspired syntax, powerful metaprogramming features, and compiles to C for high performance. Nim is ideal for system-level programming and web development, offering great performance with a clean and modern developer experience."
    },
    {
        id: uuidv4(),
        username: "Hack",
        content: "Hack is a type-safe language built on PHP.",
        description: "Hack is a programming language developed by Meta (Facebook) that adds static typing and advanced features to PHP. Running on the HipHop Virtual Machine (HHVM), Hack improves code reliability, safety, and performance. It supports gradual typing, collections, and async programming, and is used internally by Meta for large-scale PHP codebases."
    },
    {
        id: uuidv4(),
        username: "V",
        content: "V is a simple, fast language for maintainable software.",
        description: "V is a statically typed, compiled language designed to be simple, fast, and secure. It compiles in under a second, offers built-in memory safety, and has no undefined behavior. Inspired by Go and Rust, V is ideal for building maintainable, cross-platform software and command-line tools with minimal overhead."
    }
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs", {posts});
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
})
app.post("/posts", (req,res)=>{
    let{id ,username , content}=req.body;
    posts.push({id ,username , content});
    res.redirect("/posts");
})

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    res.render("show.ejs", { post });
});
app.delete("/posts/:id",(req,res)=>{
    let { id } = req.params;
    posts = posts.filter((p) => p.id !== id);
    res.redirect("/posts");
})

app.listen(port, ()=>{
    console.log(`Run server http://localhost:8080/posts`);
})  