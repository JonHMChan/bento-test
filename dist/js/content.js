var grid = [
  {
    "name": "fundamentals",
    "tags": ["bridge"],
    "description": "How the web works",
    "before": [],
    "after": ["html", "css", "javascript"],
    "home": "http://developer.mozilla.org/en-US/docs/Web/HTML",
    "links": [
      {
        "name": "How the Internet Works in 5 Minutes",
        "level": 0,
        "url": "https://www.youtube.com/watch?v=7_LPdttKXPc"
      },
      {
        "name": "20 Things I Learned",
        "level": 0,
        "url": "http://www.20thingsilearned.com/en-US"
      },
      {
        "name": "DNS Explained",
        "level": 0,
        "url": "https://www.youtube.com/watch?v=72snZctFFtA"
      }
    ]
  },
  {
    "name": "html",
    "tags": ["frontend"],
    "description": "The very basics of putting something on a webpage",
    "before": [],
    "after": ["css", "javascript", "sublime text"],
    "home": "http://developer.mozilla.org/en-US/docs/Web/HTML",
    "links": [
      {
        "name": "Codecademy",
        "level": 0,
        "url": "http://www.codecademy.com/courses/web-beginner-en-HZA3b/0/1?curriculum_id=50579fb998b470000202dc8b"
      },
      {
        "name": "Dash",
        "level": 0,
        "url": "http://dash.ga.co/?vip=bento"
      },
      {
        "name": "HTML Dog",
        "level": 0,
        "url": "http://htmldog.com/guides/html/beginner/"
      }
    ]
  },
  {
    "name": "css",
    "tags": ["frontend"],
    "description": "Styling your webpage",
    "before": [],
    "after": ["javascript", "less", "sass", "bootstrap", "sublime text"],
    "home": "http://developer.mozilla.org/en-US/docs/Web/CSS",
    "links": [
      {
        "name": "Codecademy",
        "level": 0,
        "url": "http://www.codecademy.com/courses/web-beginner-en-TlhFi/0/1?curriculum_id=50579fb998b470000202dc8b"
      },
      {
        "name": "Dash",
        "level": 0,
        "url": "http://dash.ga.co/?vip=bento"
      },
      {
        "name": "HTML Dog",
        "level": 0,
        "url": "http://htmldog.com/guides/css/beginner/"
      },
      {
        "name": "Treehouse - CSS Foundations",
        "level": 0,
        "url": "http://teamtreehouse.com/library/css-foundations"
      },
      {
        "name": "Scalable and Modular Architecture for CSS",
        "level": 1,
        "url": "http://smacss.com/book/"
      },
      {
        "name": "A Beginner's Guide to HTML & CSS",
        "level": 0,
        "url": "http://learn.shayhowe.com/html-css/"
      }
    ]
  },
  {
    "name": "shell",
    "tags": ["bridge"],
    "description": "Use the command line",
    "before": [],
    "after": ["git"],
    "home": "http://en.wikipedia.org/wiki/Shell_(computing)",
    "links": [
      {
        "name": "Don't Fear the Command Line",
        "level": 0,
        "url": "http://readwrite.com/2014/07/18/command-line-tutorial-intro"
      },
      {
        "name": "Learning the Shell",
        "level": 0,
        "url": "http://linuxcommand.org/lc3_learning_the_shell.php"
      },
      {
        "name": "Learn Shell",
        "level": 0,
        "url": "http://learnshell.org"
      },
      {
        "name": "The Command Line Crash Course",
        "level": 0,
        "url": "http://cli.learncodethehardway.org/book/introduction.html"
      },
      {
        "name": "The Fundamentals of Bash Scripting",
        "level": 0,
        "url": "http://code.tutsplus.com/tutorials/the-fundamentals-of-bash-scripting--net-32093"
      },
      {
        "name": "Explain Shell",
        "level": 1,
        "url": "http://explainshell.com/"
      },
      {
        "name": "Advanced Topics",
        "level": 2,
        "url": "http://www.tldp.org/LDP/abs/html/part5.html"
      }
    ]
  },
  {
    "name": "git",
    "tags": ["bridge"],
    "description": "Simple to use version control",
    "before": [],
    "after": ["http", "heroku", "javascript"],
    "home": "http://git-scm.com/",
    "links": [
      {
        "name": "Try Git",
        "level": 0,
        "url": "http://try.github.io/levels/1/challenges/1"
      },
      {
        "name": "The Simple Guide",
        "level": 0,
        "url": "http://rogerdudler.github.io/git-guide/"
      },
      {
        "name": "Git Immersion",
        "level": 0,
        "url": "http://gitimmersion.com/"
      },
      {
        "name": "Git Basics",
        "level": 0,
        "url": "https://www.atlassian.com/git/tutorials/setting-up-a-repository/"
      },
      {
        "name": "Getting Started",
        "level": 0,
        "url":"http://git-scm.com/book/en/Getting-Started"
      },
      {
        "name": "Collaborating",
        "level": 1,
        "url": "https://www.atlassian.com/git/tutorials/syncing/"
      },
      {
        "name": "Migrating to Git",
        "level": 1,
        "url": "https://www.atlassian.com/git/tutorials/migrating-overview/"
      },
      {
        "name": "Git Best Practices",
        "level": 1,
        "url": "http://sethrobertson.github.io/GitBestPractices/"
      },
      {
        "name": "Learn Git Branching",
        "level": 1,
        "url": "http://pcottle.github.io/learnGitBranching/"
      },
      {
        "name": "Advanced Tips",
        "level": 2,
        "url": "https://www.atlassian.com/git/tutorials/advanced-overview/"
      },
      {
        "name": "Git from the bottom up",
        "level": 2,
        "url": "http://ftp.newartisans.com/pub/git.from.bottom.up.pdf"
      },
      {
        "name": "A Hacker's Guide to Git",
        "level": 2,
        "url": "http://wildlyinaccurate.com/a-hackers-guide-to-git"
      }
    ]
  },
  {
    "name": "javascript",
    "tags": ["frontend"],
    "description": "Make your pages interactive",
    "before": [],
    "after": ["python", "jquery", "json", "node", "underscore", "sugar", "coffeescript", "regex"],
    "home": "http://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "links": [
      {
        "name": "Codecademy",
        "level": 0,
        "url": "http://www.codecademy.com/courses/getting-started-v2/0/1?curriculum_id=506324b3a7dffd00020bf661"
      },
      {
        "name": "Learn X in Y Minutes",
        "level": 0,
        "url": "http://learnxinyminutes.com/docs/javascript/"
      },
      {
        "name": "Learn JS",
        "level": 0,
        "url": "http://www.learn-js.org/"
      },
      {
        "name": "Treehouse - JavaScript Foundations",
        "level": 0,
        "url": "http://teamtreehouse.com/library/websites/javascript-foundations"
      },
      {
        "name": "CoderMania",
        "level": 0,
        "url": "http://www.codermania.com/javascript/lesson/1a/hello-world"
      },
      {
        "name": "Javascript for Cats",
        "level": 0,
        "url": "http://jsforcats.com/"
      },
      {
        "name": "A Re-introduction to JavaScript",
        "level": 1,
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript"
      },
      {
        "name": "A Dive Into Plain Javascript",
        "level": 1,
        "url": "http://blog.adtile.me/2014/01/16/a-dive-into-plain-javascript/"
      },
      {
        "name": "Superhero.js",
        "level": 1,
        "url": "http://superherojs.com/"
      },
      {
        "name": "JS: The Right Way",
        "level": 1,
        "url": "http://jstherightway.org/"
      },
      {
        "name": "Eloquent Javascript",
        "level": 1,
        "url": "http://eloquentjavascript.net/"
      },
      {
        "name": "Introduction to Object-Oriented JavaScript",
        "level": 2,
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript"
      },
      {
        "name": "Learning Javascript Design Patterns",
        "level": 2,
        "url": "http://addyosmani.com/resources/essentialjsdesignpatterns/book/"
      },
      {
        "name": "Fight Code Game",
        "level": 1,
        "url": "http://fightcodegame.com/"
      },
      {
        "name": "Code Wars",
        "level": 1,
        "url": "http://www.codewars.com/"
      },
      {
        "name": "Human Javascript",
        "level": 1,
        "url": "http://read.humanjavascript.com/"
      },
      {
        "name": "Learning Advanced JavaScript",
        "level": 2,
        "url": "http://ejohn.org/apps/learn/"
      },
      {
        "name": "Modular JavaScript",
        "level": 1,
        "url": "http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html#show-last-Point"
      }
    ]
  },
  {
    "name": "jquery",
    "tags": ["frontend"],
    "description": "Control webpage elements with javascript",
    "before": [],
    "after": ["python", "angular", "backbone", "ember", "sugar", "coffeescript", "flight", "dart", "d3"],
    "home": "http://jquery.com/",
    "links": [
      {
        "name": "Try jQuery",
        "level": 0,
        "url": "http://try.jquery.com/"
      },
      {
        "name": "Codecademy",
        "level": 0,
        "url": "http://www.codecademy.com/courses/web-beginner-en-bay3D/0/1?curriculum_id=50a3fad8c7a770b5fd0007a1"
      },
      {
        "name": "jQuery in 30 Minutes",
        "level": 0,
        "url": "http://screencastaday.s3.amazonaws.com/Video_80/JQueryPresentation.swf"
      },
      {
        "name": "Treehouse - Build an Interactive Website",
        "level": 0,
        "url": "http://teamtreehouse.com/library/websites/build-an-interactive-website"
      }
    ]
  },
  {
    "name": "sublime text",
    "tags": ["ide"],
    "description": "A popular text editor",
    "before": [],
    "after": ["vim", "python"],
    "home": "http://www.sublimetext.com/",
    "links": [
      {
        "name": "The Complete Visual Guide to Sublime Text 3",
        "level": 0,
        "url": "https://scotch.io/bar-talk/the-complete-visual-guide-to-sublime-text-3-getting-started-and-keyboard-shortcuts"
      },
      {
        "name": "Getting Started with Sublime Text 3: 25 Tips, Tricks, and Shortcuts",
        "level": 0,
        "url": "https://blog.generalassemb.ly/sublime-text-3-tips-tricks-shortcuts/"
      }
    ]
  },
  {
    "name": "python",
    "tags": ["backend"],
    "description": "A programming language to easily pick up",
    "before": [],
    "after": ["big-o", "flask", "django", "tornado", "heroku", "ruby", "node", "go"],
    "home": "http://www.python.org/",
    "links": [
      {
        "name": "Codecademy",
        "level": 0,
        "url": "http://www.codecademy.com/tracks/python"
      },
      {
        "name": "Intro to Computer Science",
        "level": 0,
        "url": "https://www.udacity.com/course/cs101"
      },
      {
        "name": "Learn Python",
        "level": 0,
        "url": "http://www.learnpython.org/"
      },
      {
        "name": "Learn X in Y Minutes",
        "level": 0,
        "url": "http://learnxinyminutes.com/docs/python/"
      },
      {
        "name": "Learn Python the Hard Way",
        "level": 0,
        "url": "http://learnpythonthehardway.org/book/"
      },
      {
        "name": "Full Stack Python",
        "level": 1,
        "url": "http://www.fullstackpython.com/"
      },
      {
        "name": "Think Python: How to Think Like a Computer Scientist",
        "level": 1,
        "url": "http://www.greenteapress.com/thinkpython/html/thinkpython002.html"
      },
      {
        "name": "Python Module of the Week",
        "level": 1,
        "url": "http://pymotw.com/2/"
      }
    ]
  },
  {
    "name": "flask",
    "tags": ["backend"],
    "description": "A basic microframework for python on the web",
    "before": [],
    "after": ["tornado", "mongo", "django", "heroku", "memcached"],
    "home": "http://flask.pocoo.org/",
    "links": [
      {
        "name": "Documentation",
        "level": 0,
        "url": "http://flask.pocoo.org/docs/"
      },
      {
        "name": "Flask Mega Tutorial",
        "level": 0,
        "url": "http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world"
      },
      {
        "name": "Flaskr: Intro to Flask and Test Driven Development",
        "level": 1,
        "url": "https://github.com/mjhea0/flaskr-tdd"
      },
      {
        "name": "Explore Flask",
        "level": 0,
        "url": "http://exploreflask.com/preface.html"
      },
      {
        "name": "Discover Flask",
        "level": 1,
        "url": "http://discoverflask.com"
      }
    ]
  },
  {
    "name": "sql",
    "tags": ["database"],
    "description": "A popular database language",
    "before": [],
    "after": ["mongo", "couchdb", "neo4j", "redis", "memcached", "postgresql"],
    "home": "http://www.mysql.com/",
    "links": [
      {
        "name": "SQLZoo",
        "level": 0,
        "url": "http://sqlzoo.net/wiki/Main_Page"
      },
      {
        "name": "w3schools",
        "level": 0,
        "url": "http://www.w3schools.com/sql/"
      },
      {
        "name": "Problems and Solutions",
        "level": 0,
        "url": "http://www.sql-tutorial.ru/en/book_Intro.html"
      }
    ]
  },
  {
    "name": "database design",
    "tags": ["database"],
    "description": "How to organize your database",
    "before": ["sql"],
    "after": ["postgresql"],
    "home": "",
    "links": [
      {
        "name": "tuts+",
        "level": 0,
        "url": "http://code.tutsplus.com/tutorials/relational-databases-for-dummies--net-30244"
      }
    ]
  },
  {
    "name": "sqlalchemy",
    "tags": ["database"],
    "description": "Keep your python models and database objects in sync",
    "before": ["sql", "flask"],
    "after": ["postgresql", "alembic"],
    "home": "http://www.sqlalchemy.org/",
    "links": [
      {
        "name": "Object Relational Tutorial",
        "level": 0,
        "url": "http://docs.sqlalchemy.org/en/rel_0_9/orm/tutorial.html"
      }
    ]
  },
  {
    "name": "alembic",
    "tags": ["database"],
    "description": "Manage your database changes in python",
    "before": ["sqlalchemy", "flask"],
    "after": [],
    "home": "",
    "links": [
      {
        "name": "A Practical Guide to Using Alembic",
        "level": 0,
        "url": "http://www.chesnok.com/daily/2013/07/02/a-practical-guide-to-using-alembic/"
      },
      {
        "name": "Tutorial",
        "level": 0,
        "url": "http://alembic.readthedocs.org/en/latest/tutorial.html"
      }
    ]
  },
  {
    "name": "heroku",
    "tags": ["bridge"],
    "description": "Easily deploy your applications",
    "before": [],
    "after": ["git", "postgresql", "javascript", "ruby", "python", "php"],
    "home": "http://heroku.com/",
    "links": [
      {
        "name": "Get Started",
        "level": 0,
        "url": "https://devcenter.heroku.com/articles/quickstart"
      },
      {
        "name": "Intro to Heroku Screencast",
        "level": 0,
        "url": "http://www.codeschool.com/code_tv/heroku"
      }
    ]
  },
  {
    "name": "cloudflare",
    "tags": ["bridge"],
    "description": "Protect your website",
    "before": [],
    "after": [],
    "home": "https://www.cloudflare.com/",
    "links": [
      {
        "name": "Overview",
        "level": 0,
        "url": "https://www.cloudflare.com/overview"
      }
    ]
  },
  {
    "name": "json",
    "tags": ["database"],
    "description": "Represent your data in text",
    "before": [],
    "after": ["mongo", "couchdb", "http", "rest", "xml", "redis", "memcached"],
    "home": "http://www.json.org/",
    "links": [
      {
        "name": "What is JSON?",
        "level": 0,
        "url": "http://www.copterlabs.com/blog/json-what-it-is-how-it-works-how-to-use-it/"
      },
      {
        "name": "JSON Validator",
        "level": 0,
        "url": "http://jsonlint.com"
      }
    ]
  },
  {
    "name": "data science",
    "tags": ["bridge"],
    "description": "Get meaningful insights from your data",
    "before": [],
    "after": [],
    "home": "",
    "links": [
      {
        "name": "DataQuest",
        "level": 0,
        "url": "https://dataquest.io/"
      }
    ]
  },
  {
    "name": "less",
    "tags": ["frontend"],
    "description": "A dynamic stylesheet language",
    "before": [],
    "after": ["sass", "bootstrap"],
    "home": "http://lesscss.org/",
    "links": [
      {
        "name": "Synopsis",
        "level": 0,
        "url": "http://lesscss.org/#synopsis"
      },
      {
        "name": "Verekia's Tutorial",
        "level": 0,
        "url": "http://verekia.com/less-css/dont-read-less-css-tutorial-highly-addictive"
      }
    ]
  },
  {
    "name": "bootstrap",
    "tags": ["frontend"],
    "description": "A popular frontend framework",
    "before": [],
    "after": ["angular", "ember", "backbone", "sass", "less", "flight"],
    "home": "http://getbootstrap.com/",
    "links": [
      {
        "name": "Get Started",
        "level": 0,
        "url": "http://getbootstrap.com/getting-started/"
      },
      {
        "name": "Getting Started with Bootstrap 3",
        "level": 0,
        "url": "http://www.realpython.com/blog/design/getting-started-with-bootstrap-3"
      },
      {
        "name": "Introduction to Bootstrap – A Tutorial",
        "level": 0,
        "url": "https://www.edx.org/course/introduction-bootstrap-tutorial-microsoft-dev203x-0"
      }
    ]
  },
  {
    "name": "big-o",
    "tags": ["bridge"],
    "description": "How to measure your code's performance",
    "before": [],
    "after": ["data structures", "algorithms"],
    "home": "http://en.wikipedia.org/wiki/Big_O_notation",
    "links": [
      {
        "name": "Algorithm Analysis",
        "level": 0,
        "url": "http://interactivepython.org/runestone/static/pythonds/index.html#analysis"
      },
      {
        "name": "Big-O Cheat Sheet",
        "level": 0,
        "url": "http://bigocheatsheet.com/"
      },
      {
        "name": "Codility: Time Complexity",
        "level": 1,
        "url": "http://codility.com/media/train/1-TimeComplexity.pdf"
      }
    ]
  },
  {
    "name": "algorithms",
    "tags": ["bridge"],
    "description": "Popular methods to manipulate data",
    "before": [],
    "after": ["data structures"],
    "home": "http://en.wikipedia.org/wiki/Algorithm",
    "links": [
      {
        "name": "Problem Solving with Algorithms and Data Structures",
        "level": 0,
        "url": "http://interactivepython.org/runestone/static/pythonds/index.html"
      },
      {
        "name": "Khan Academy",
        "level": 0,
        "url": "https://www.khanacademy.org/computing/computer-science/algorithms"
      }
    ]
  },
  {
    "name": "data structures",
    "tags": ["bridge"],
    "description": "Efficiently organize your data in code",
    "before": [],
    "after": ["big-o"],
    "home": "http://en.wikipedia.org/wiki/Data_structure",
    "links": [
      {
        "name": "Basic Data Structures",
        "level": 0,
        "url": "http://interactivepython.org/runestone/static/pythonds/index.html"
      }
    ]
  },
  {
    "name": "http",
    "tags": ["bridge"],
    "description": "The basics of making web requests",
    "before": [],
    "after": ["python", "javascript", "ruby", "heroku", "json", "rest", "https"],
    "home": "http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol",
    "links": [
      {
        "name": "A Beginner's Guide",
        "level": 0,
        "url": "http://net.tutsplus.com/tutorials/other/a-beginners-introduction-to-http-and-rest/"
      }
    ]
  },
  {
    "name": "security",
    "tags": ["bridge"],
    "description": "How to protect your website",
    "before": [],
    "after": ["https", "cloudflare"],
    "home": "https://www.owasp.org/index.php/Category:OWASP_Guide_Project",
    "links": [
      {
        "name": "How Encryption Works",
        "level": 0,
        "url": "http://www.wimp.com/howencryption/"
      },
      {
        "name": "An Introduction to Cryptography and Cryptanalysis",
        "level": 0,
        "url": "http://math.scu.edu/~eschaefe/book.pdf"
      },
      {
        "name": "Google Security Handbook",
        "level": 1,
        "url": "https://code.google.com/p/browsersec/wiki/Main"
      }
    ]
  },
  {
    "name": "https",
    "tags": ["bridge"],
    "description": "The basics of secure connections",
    "before": [],
    "after": [],
    "home": "http://en.wikipedia.org/wiki/HTTP_Secure",
    "links": [
      {
        "name": "First Milliseconds https",
        "level": 0,
        "url": "http://www.moserware.com/2009/06/first-few-milliseconds-of-https.html"
      },
      {
        "name": "Switch Your Website To Use https",
        "level": 0,
        "url": "https://konklone.com/post/switch-to-https-now-for-free"
      }
    ]
  },
  {
    "name": "mongo",
    "tags": ["database"],
    "description": "A simple javascript based database",
    "before": [],
    "after": ["elasticsearch", "couchdb", "neo4j", "redis", "memcached", "sql", "rethinkdb"],
    "home": "http://www.mongodb.org/",
    "links": [
      {
        "name": "MongoDB University",
        "level": 0,
        "url": "https://education.mongodb.com/"
      },
      {
        "name": "Learn you mongo",
        "level": 0,
        "url": "https://github.com/evanlucas/learnyoumongo"
      }
    ]
  },
  {
    "name": "couchdb",
    "tags": ["database"],
    "description": "A nosql database for the web",
    "before": [],
    "after": ["mongo", "json", "elasticsearch", "neo4j", "redis", "memcached", "sql", "rethinkdb"],
    "home": "http://couchdb.apache.org/",
    "links": [
      {
        "name": "Getting Started",
        "level": 0,
        "url": "http://docs.couchdb.org/en/latest/intro/tour.html"
      },
      {
        "name": "Learn CouchDB",
        "level": 0,
        "url": "http://code.tutsplus.com/articles/getting-started-with-couchdb--net-18801"
      }
    ]
  },
  {
    "name": "elasticsearch",
    "tags": ["database"],
    "description": "A popular search engine for your application",
    "before": [],
    "after": ["mongo", "couchdb", "sql", "json", "memcached", "redis", "neo4j"],
    "home": "http://www.elasticsearch.org/",
    "links": [
      {
        "name": "Getting Started",
        "level": 0,
        "url": "http://www.elasticsearch.org/webinars/getting-started-with-elasticsearch/"
      },
      {
        "name": "Introducing Query DSL",
        "level": 0,
        "url": "http://www.elasticsearch.org/videos/introducing-query-dsl/"
      },
      {
        "name": "Reference",
        "level": 0,
        "url": "http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/setup.html"
      }
    ]
  },
  {
    "name": "redis",
    "tags": ["database"],
    "description": "A basic key-value store for caching",
    "before": [],
    "after": ["mongo", "couchdb", "memcached", "neo4j", "sql"],
    "home": "http://redis.io/",
    "links": [
      {
        "name": "The Little Redis Book",
        "level": 0,
        "url": "http://openmymind.net/redis.pdf"
      },
      {
        "name": "Try Redis",
        "level": 0,
        "url": "http://try.redis.io/"
      }
    ]
  },
  {
    "name": "memcached",
    "tags": ["database"],
    "description": "A way to cache your data in memory",
    "before": [],
    "after": ["mongo", "couchdb", "redis", "heroku", "neo4j", "sql"],
    "home": "http://memcached.org/",
    "links": [
      {
        "name": "An Adventure in Learning Memcached",
        "level": 0,
        "url": "https://code.google.com/p/memcached/wiki/TutorialCachingStory"
      },
      {
        "name": "Distributed Caching with Memcached",
        "level": 0,
        "url": "http://www.linuxjournal.com/article/7451"
      }
    ]
  },
  {
    "name": "uilang",
    "tags": ["frontend"],
    "description": "A minimal programming language for web designers",
    "before": [],
    "after": ["jquery"],
    "home": "http://uilang.com/",
    "links": [
      {
        "name": "Home",
        "level": 0,
        "url": "http://uilang.com/"
      }
    ]
  },
  {
    "name": "angular",
    "tags": ["frontend"],
    "description": "A javascript framework for data-driven applications",
    "before": [],
    "after": ["ember", "jquery", "backbone", "flight"],
    "home": "http://angularjs.org/",
    "links": [
      {
        "name": "Shaping Up with Angular",
        "level": 0,
        "url": "http://campus.codeschool.com/courses/shaping-up-with-angular-js/intro"
      },
      {
        "name": "egghead.io",
        "level": 0,
        "url": "http://egghead.io/lessons"
      },
      {
        "name": "A Better Way to Learn Angular",
        "level": 0,
        "url": "http://www.thinkster.io/pick/GtaQ0oMGIl/"
      },
      {
        "name": "Beginner to Expert Guide to AngularJS",
        "level": 0,
        "url": "http://www.ng-newsletter.com/posts/beginner2expert-how_to_start.html"
      },
      {
        "name": "AngularJS Tutorial",
        "level": 0,
        "url": "https://docs.angularjs.org/tutorial"
      }
    ]
  },
  {
    "name": "ractive",
    "tags": ["frontend"],
    "description": "Live, reactive templates in JavaScript",
    "home": "http://ractivejs.org",
    "before": [],
    "after": ["node"],
    "links": [
      {
        "name": "Learn Ractive.js",
        "level": 0,
        "url": "http://learn.ractivejs.org"
      }
    ]
  },
  {
    "name": "sass",
    "tags": ["frontend"],
    "description": "An dynamic extension of css",
    "before": [],
    "after": ["less", "bootstrap", "angular"],
    "home": "http://sass-lang.com/",
    "links": [
      {
        "name": "Tutorial",
        "level": 0,
        "url": "http://sass-lang.com/tutorial.html"
      },
      {
        "name": "SassMeister",
        "level": 1,
        "url": "http://sassmeister.com"
      }
    ]
  },
  {
    "name": "node",
    "tags": ["backend"],
    "description": "Create a backend with javascript",
    "before": [],
    "after": ["express", "heroku", "mongo", "ember", "angular", "grunt"],
    "home": "http://nodejs.org/",
    "links": [
      {
        "name": "Node Beginner",
        "level": 0,
        "url": "http://www.nodebeginner.org/"
      },
      {
        "name": "nodeschool.io",
        "level": 0,
        "url": "http://nodeschool.io/"
      },
      {
        "name": "How Do I Get Started?",
        "level": 0,
        "url": "http://stackoverflow.com/a/5511507/1043674"
      },
      {
        "name": "Node.js for Beginners",
        "level": 0,
        "url": "http://code.tutsplus.com/tutorials/nodejs-for-beginners--net-26314"
      },
      {
        "name": "Style Guide",
        "level": 1,
        "url": "http://nodeguide.com/style.html"
      },
      {
        "name": "Node, Express, and MongoDB - a Primer",
        "level": 1,
        "url": "http://mherman.org/blog/2014/12/31/node-and-mongoose-a-primer"
      }
    ]
  },
  {
    "name": "express",
    "tags": ["backend"],
    "description": "The most popular web framework for node",
    "before": [],
    "after": ["heroku", "angular", "ember"],
    "home": "http://expressjs.com/",
    "links": [
      {
        "name": "Guide",
        "level": 0,
        "url": "http://expressjs.com/guide.html"
      },
      {
        "name": "Introduction to Express",
        "level": 0,
        "url": "http://net.tutsplus.com/tutorials/javascript-ajax/introduction-to-express/"
      }
    ]
  },
  {
    "name": "grunt",
    "tags": ["bridge"],
    "description": "A powerful javascript task runner",
    "before": [],
    "after": ["jade", "coffeescript", "less", "sass"],
    "home": "http://gruntjs.com/",
    "links": [
      {
        "name": "Getting Started",
        "level": 0,
        "url": "http://gruntjs.com/getting-started"
      },
      {
        "name": "Tutorial",
        "level": 0,
        "url": "http://24ways.org/2013/grunt-is-not-weird-and-hard/"
      }
    ]
  },
  {
    "name": "jade",
    "tags": ["frontend"],
    "description": "A templating language forhtml",
    "before": [],
    "after": ["less", "bootstrap", "angular", "grunt"],
    "home": "http://jade-lang.com/",
    "links": [
      {
        "name": "Tutorial",
        "level": 0,
        "url": "http://jade-lang.com/tutorial/"
      },
      {
        "name": "Learn Jade",
        "level": 0,
        "url": "http://www.learnjade.com/"
      }
    ]
  },
  {
    "name": "regex",
    "tags": ["bridge"],
    "description": "A popular syntax for pattern matching",
    "home": "http://www.regular-expressions.info/",
    "before": [],
    "after": ["json", "rest"],
    "links":[
      {
        "name": "RegexOne",
        "level": 0,
        "url": "http://regexone.com/"
      },
      {
        "name": "Learn Regex the Hard Way",
        "level": 0,
        "url": "http://regex.learncodethehardway.org/book/"
      }
    ]
  },
  {
    "name": "vim",
    "tags": ["ide"],
    "description": "A text editor in your console",
    "before": [],
    "after": ["sublime text"],
    "home": "http://vim.sourceforge.net/",
    "links": [
      {
        "name": "Vim Adventures",
        "level": 0,
        "url": "http://vim-adventures.com/"
      },
      {
        "name": "Interactive Vim Tutorial",
        "level": 0,
        "url": "http://www.openvim.com/tutorial.html"
      },
      {
        "name": "Vim Novice Tutorial Videos",
        "level": 0,
        "url": "http://derekwyatt.org/vim/tutorials/novice/"
      },
      {
        "name": "Vim as a Design Tool",
        "level": 0,
        "url": "http://hackdesign.org/lessons/49"
      },
      {
        "name": "Vim Genius",
        "level": 1,
        "url": "http://vimgenius.com/"
      },
      {
        "name": "Vim Golf",
        "level": 2,
        "url": "http://vimgolf.com/"
      }
    ]
  },
  {
    "name":"mvc",
    "tags": ["bridge"],
    "description": "Popular software architecture pattern",
    "before": [],
    "after": ["codeigniter", "laravel", "symfony", "yii","cakephp"],
    "home": "http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller",
    "links": [
      {
        "name":"The Model-View-Controller Pattern",
        "level": 0,
        "url":"https://en.wikibooks.org/wiki/Computer_Science_Design_Patterns/Model%E2%80%93view%E2%80%93controller"
      },
      {
        "name":"What are the benefits of MVC?",
        "level": 0,
        "url":"http://blog.iandavis.com/2008/12/09/what-are-the-benefits-of-mvc/"
      },
      {
        "name":"Model-View-Controller (MVC) Explained",
        "level": 0,
        "url":"https://realpython.com/blog/python/the-model-view-controller-mvc-paradigm-summarized-with-legos/"
      }
    ]
  },
  {
    "name": "rest",
    "tags": ["api"],
    "description": "A way to architecture your applications around verbs and resources",
    "home": "",
    "before": [],
    "after": ["json", "xml", "http"],
    "links": [
      {
        "name": "Best Practices for Designing Pragmatic RESTful APIs",
        "level": 0,
        "url": "http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api?hn"
      },
      {
        "name": "Designing HTTP Interfaces and RESTful Web Services",
        "level": 1,
        "url": "http://www.youtube.com/watch?v=zEyg0TnieLg"
      },
      {
        "name": "White House Web API Standards",
        "level": 0,
        "url": "https://github.com/WhiteHouse/api-standards"
      },
      {
        "name": "Architectural Styles and the Design of Network-based Software Architectures",
        "level": 0,
        "url": "http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm"
      },
      {
        "name": "Create a Super Basic REST API with django-tastypie",
        "level": 0,
        "url": "http://www.realpython.com/blog/python/create-a-super-basic-rest-api-with-django-tastypie"
      }
    ]
  },
  {
    "name": "bottle",
    "tags": ["backend"],
    "description": "A fast, simple and lightweight micro framework for python",
    "before": [],
    "after": ["flask", "tornado", "mongo", "couchdb", "django", "heroku", "memcached"],
    "home": "http://bottlepy.org/docs/dev/",
    "links": [
      {
        "name": "Developing with Bottle",
        "level": 0,
        "url": "http://www.realpython.com/blog/python/developing-with-bottle-part-1"
      },
      {
        "name": "Developing with Bottle - part 2",
        "level": 1,
        "url": "http://www.realpython.com/blog/python/developing-with-bottle-part-2-plot-ly-api"
      }
    ]
  },
  {
    "name": "django",
    "tags": ["backend"],
    "description": "A popular web framework for python",
    "before": [],
    "after": ["tornado", "flask", "heroku"],
    "home": "http://www.djangoproject.com",
    "links": [
      {
        "name": "Want to Learn Django?",
        "level": 0,
        "url": "http://elweb.co/want-to-learn-django-start-here/"
      },
      {
        "name": "Documentation",
        "level": 0,
        "url": "https://docs.djangoproject.com/en/1.8/"
      },
      {
        "name": "Setting up a Django Project from Scratch",
        "level": 0,
        "url": "http://realdjango.com/"
      }
    ]
  },
  {
    "name": "tornado",
    "tags": ["backend"],
    "description": "An asynchronous microframework for python on the web",
    "before": [],
    "after": ["flask", "heroku", "django"],
    "home": "http://www.tornadoweb.org/en/stable/",
    "links": [
      {
        "name": "Documentation",
        "level": 0,
        "url": "http://www.tornadoweb.org/en/stable/documentation.html"
      }
    ]
  },
  {
    "name": "ruby",
    "tags": ["backend"],
    "description": "A simple scripting language",
    "before": [],
    "after": ["rails", "python"],
    "home": "http://www.ruby-lang.org/en/",
    "links": [
      {
        "name": "Try Ruby",
        "level": 0,
        "url": "http://tryruby.org/levels/1/challenges/0"
      },
      {
        "name": "Codecademy",
        "level": 0,
        "url": "http://www.codecademy.com/tracks/ruby"
      },
      {
        "name": "RubyMonk",
        "level": 0,
        "url":"http://rubymonk.com/"
      },
      {
        "name": "Ruby Warrior",
        "level": 0,
        "url": "https://www.bloc.io/ruby-warrior/#/"
      },
      {
        "name": "Ruby Koans",
        "level": 0,
        "url": "http://rubykoans.com/"
      },
      {
        "name": "Learn X in Y Minutes",
        "level": 0,
        "url": "http://learnxinyminutes.com/docs/ruby/"
      },
      {
        "name": "Learn Ruby the Hard Way",
        "level": 0,
        "url": "http://ruby.learncodethehardway.org/book/"
      },
      {
        "name": "Treehouse - Ruby Foundations",
        "level": 0,
        "url": "http://teamtreehouse.com/library/programming/ruby-foundations"
      },
      {
        "name": "Code Wars",
        "level": 0,
        "url": "http://www.codewars.com/"
      },
      {
        "name": "Why's (Poignant) Guide to Ruby",
        "level": 0,
        "url": "http://mislav.uniqpath.com/poignant-guide/"
      },
      {
        "name": "Ruby in Twenty Minutes",
        "level": 0,
        "url": "https://www.ruby-lang.org/en/documentation/quickstart/"
      }
    ]
  },
  {
    "name": "rails",
    "tags": ["backend", "mvc"],
    "description": "The most popular web framework for ruby",
    "before": [],
    "after": ["heroku", "coffeescript", "less", "sass", "sql"],
    "home": "http://rubyonrails.org/",
    "links": [
      {
        "name": "Michael Hartl's Tutorial",
        "level": 0,
        "url": "https://www.railstutorial.org/book"
      },
      {
        "name": "Learn Ruby on Rails as You Modify a Craigslist Clone",
        "level": 0,
        "url": "http://www.thinkful.com/learn/ruby-on-rails-tutorial/"
      },
      {
        "name": "The Best Way to Learn Rails",
        "level": 0,
        "url": "http://net.tutsplus.com/tutorials/ruby/the-best-way-to-learn-ruby-on-rails/"
      },
      {
        "name": "Rails for Zombies",
        "level": 0,
        "url": "http://railsforzombies.org/"
      },
      {
        "name": "Install Rails",
        "level":0,
        "url": "http://installrails.com/"
      },
      {
        "name": "Rails Anatomy",
        "level": 0,
        "url": "https://www.codeschool.com/code_tv/rails-anatomy"
      },
      {
        "name": "Introduction to Rails",
        "level": 0,
        "url": "http://net.tutsplus.com/tutorials/ruby/the-intro-to-rails-screencast-i-wish-i-had/"
      },
      {
        "name": "What is Ruby on Rails?",
        "level": 0,
        "url": "http://railsapps.github.io/what-is-ruby-rails.html"
      },
      {
        "name": "Recommendations for a Rails Tutorial",
        "level": 0,
        "url": "https://tutorials.railsapps.org/rails-tutorial"
      },
      {
        "name": "RailsCasts",
        "level": 0,
        "url": "http://railscasts.com/"
      },
      {
        "name": "Treehouse - Build a Simple Ruby on Rails Application",
        "level": 0,
        "url": "http://teamtreehouse.com/library/programming/build-a-simple-ruby-on-rails-application"
      },
      {
        "name": "When Should You Use Scaffolding?",
        "level": 0,
        "url": "http://gun.io/blog/using-scaffolding/"
      }
    ]
  },
  {
    "name": "jekyll",
    "tags": ["backend"],
    "description": "Simple blogging",
    "home": "http://jekyllrb.com/",
    "before": ["git", "html", "css"],
    "after": [],
    "links": [
      {
        "name": "Documentation",
        "level": 0,
        "url": "http://jekyllrb.com/docs/home/"
      }
    ]
  },
  {
    "name": "go",
    "tags": ["backend"],
    "description": "A new language for the web",
    "home": "http://golang.org/",
    "before": [],
    "after": ["python", "ruby", "node"],
    "links": [
      {
        "name": "Tour",
        "level": 0,
        "url": "http://tour.golang.org/#1"
      },
      {
        "name": "Go by Example",
        "level": 0,
        "url": "https://gobyexample.com/"
      },
      {
        "name": "Writing, building, installing, and testing Go code",
        "level": 0,
        "url": "https://www.youtube.com/watch?v=XCsL89YtqCs"
      },
      {
        "name": "Effective Go",
        "level": 1,
        "url": "http://golang.org/doc/effective_go.html"
      }
    ]
  },
  {
    "name": "java",
    "tags": ["backend"],
    "description": "A popular programming language",
    "home": "",
    "before": [],
    "after": ["python", "ruby", "node", "coldfusion", "scala", "clojure", "groovy"],
    "links": [
        {
        "name": "Intro to Programming in Java",
        "level": 0,
        "url": "https://www.udacity.com/course/cs046"
      },
      {
        "name": "Programming Methodology",
        "level": 0,
        "url": "https://see.stanford.edu/Course/CS106A"
      },
      {
        "name": "BuckysRoom: Java",
        "level": 0,
        "url": "https://buckysroom.org/videos.php?cat=31"
      },
      {
        "name": "Eclipse and Java",
        "level": 0,
        "url": "http://eclipsetutorial.sourceforge.net/totalbeginner.html"
      },
      {
        "name": "Java Video Tutes",
        "level": 0,
        "url": "http://www.javavideotutes.com/lessons"
      },
      {
        "name": "Java for the Beginning Programmer",
        "level": 0,
        "url": "http://www.heatonresearch.com/articles/series/15"
      },
      {
        "name": "Learning Java",
        "level": 0,
        "url": "http://chimera.labs.oreilly.com/books/1234000001805/index.html"
      },
      {
        "name": "BuckysRoom: Intermediate Java",
        "level": 1,
        "url": "https://buckysroom.org/videos.php?cat=25"
      }

    ]
  },
  {
    "name": "scala",
    "tags": ["backend"],
    "description": "A highly performant language that works with java",
    "home": "http://www.scala-lang.org/",
    "before": [],
    "after": ["play"],
    "links":[
      {
        "name": "Scala Tutorials",
        "level": 0,
        "url": "http://scalatutorials.com/tour/"
      },
      {
        "name": "Learning Scala",
        "level": 0,
        "url": "http://stackoverflow.com/a/1380699"
      },
      {
        "name": "Coursera",
        "level": 0,
        "url": "https://www.coursera.org/course/progfun"
      }
    ]
  },
  {
    "name": "play",
    "tags": ["backend"],
    "description": "A popular web framework for scala",
    "home": "http://www.playframework.com/",
    "before": [],
    "after": [],
    "links":[
      {
        "name": "Your first Play application",
        "level": 0,
        "url": "http://www.playframework.com/documentation/2.2.x/ScalaTodoList"
      }
    ]
  },
  {
    "name": "elixir",
    "tags": ["backend"],
    "description": "A language built on top of the Erlang VM",
    "before": [],
    "after": [],
    "home": "http://elixir-lang.org/",
    "links": [
      {
        "name": "Getting Started",
        "level": 0,
        "url": "http://elixir-lang.org/getting_started/1.html"
      },
      {
        "name": "Learn X in Y minutes",
        "level": 0,
        "url": "http://learnxinyminutes.com/docs/elixir/"
      }
    ]
  },
  {
    "name": "terraform",
    "tags": ["bridge"],
    "description": "A common configuration to launch infrastructure",
    "home": "http://www.terraform.io/",
    "before": [],
    "after": ["heroku"],
    "links": [
      {
        "name": "Introduction to Terraform",
        "level": 0,
        "url": "http://www.terraform.io/intro/index.html"
      }
    ]
  },
  {
    "name": "swift",
    "tags": ["mobile"],
    "description": "The primary language for iOS",
    "home": "https://developer.apple.com/devcenter/ios/index.action",
    "before": [],
    "after": ["windows phone", "android", "objective-c"],
    "links":[
      {
        "name": "A swift tour",
        "level": 0,
        "url": "https://developer.apple.com/library/prerelease/ios/documentation/Swift/Conceptual/Swift_Programming_Language/GuidedTour.html#//apple_ref/doc/uid/TP40014097-CH2"
      },
      {
        "name": "RunSwift",
        "level": 0,
        "url": "http://www.runswiftlang.com/learn#1"
      }
    ]
  },
  {
    "name": "objective-c",
    "tags": ["mobile"],
    "description": "The previous language for iOS",
    "home": "https://developer.apple.com/devcenter/ios/index.action",
    "before": [],
    "after": ["windows phone", "android", "swift"],
    "links":[
      {
        "name": "A primer in Objective-C",
        "level": 0,
        "url": "http://courseware.codeschool.com/try_ios/objective_c_primer.pdf"
      },
      {
        "name": "Try Objective-C",
        "level": 0,
        "url": "https://www.codeschool.com/courses/try-objective-c"
      },
      {
        "name": "X-Code Cheat Sheet",
        "level": 0,
        "url": "http://www.git-tower.com/blog/xcode-cheat-sheet-detail/"
      },
      {
        "name": "Code Coalition iOS Bootcamp",
        "level": 1,
        "url": "https://www.codecoalition.com/courses/CodeCoalition/iOS101/2013_fall/about"
      }
    ]
  },
  {
    "name": "android",
    "tags": ["mobile"],
    "description": "Build apps for Android devices",
    "home": "http://developer.android.com/index.html",
    "before": [],
    "after": ["windows phone", "swift"],
    "links":[
      {
        "name": "How to Develop Android Apps",
        "level": 0,
        "url": "https://www.udacity.com/course/ud853"
      },
      {
        "name": "Building your first app",
        "level": 0,
        "url": "http://developer.android.com/training/basics/firstapp/creating-project.html"
      },
      {
        "name": "Android Development",
        "level": 0,
        "url": "http://www.vogella.com/tutorials/Android/article.html"
      }
    ]
  },
  {
    "name": "windows phone",
    "tags": ["mobile"],
    "description": "Build apps for windows phones",
    "home": "https://dev.windowsphone.com/en-us",
    "before": [],
    "after": [".net", "swift", "android"],
    "links":[
      {
        "name": "Windows App Builder",
        "level": 0,
        "url": "https://build.windowsstore.com/#fbid=9lOGdzuGAkZ"
      }
    ]
  },
  {
    "name": "parse",
    "tags": ["backend"],
    "description": "A backend for mobile apps",
    "home": "https://parse.com/",
    "before": [],
    "after": ["facebook", "foursquare", "twilio"],
    "links":[
      {
        "name": "Tutorials",
        "level": 0,
        "url": "https://parse.com/tutorials"
      }
    ]
  },
  {
    "name": "firebase",
    "tags": ["backend"],
    "description": "Build realtime apps",
    "before": [],
    "after": ["parse"],
    "home": "http://www.firebase.com/",
    "links": [
      {
        "name": "Tutorial",
        "level": 0,
        "url": "https://www.firebase.com/tutorial/#gettingstarted"
      }
    ]
  },
  {
    "name": "d3",
    "tags": ["frontend"],
    "description": "A JavaScript library for visualizing data",
    "before": [],
    "after": ["leaflet"],
    "home": "http://d3js.org/",
    "links": [
      {
        "name": "D3 Tutorials",
        "level": 0,
        "url": "http://alignedleft.com/tutorials/d3/"
      },
      {
        "name": "Codecademy",
        "level": 0,
        "url": "http://www.codecademy.com/courses/web-beginner-en-kcP9b/0/1"
      },
      {
        "name": "Interactive Data Visualization for the Web",
        "level": 1,
        "url": "http://chimera.labs.oreilly.com/books/1230000000345/index.html"
      }
    ]
  },
  {
    "name": "leaflet",
    "tags": ["frontend"],
    "description": "A JavaScript library for maps",
    "before": [],
    "after": ["d3", "api"],
    "home": "http://leafletjs.com/index.html",
    "links": [
      {
        "name": "Leaflet Tutorials",
        "level": 0,
        "url": "http://leafletjs.com/examples.html"
      },
      {
        "name": "API Reference",
        "level": 0,
        "url": "http://leafletjs.com/reference.html"
      }
    ]
  },
  {
    "name": "velocity",
    "tags": ["frontend"],
    "description": "Smooth JavaScript animation",
    "home": "http://velocityjs.org",
    "before": [],
    "after": ["d3", "three.js"],
    "links":[
      {
        "name": "Documentation",
        "level": 0,
        "url": "http://velocityjs.org"
      },
      {
        "name": "Improving UI Animation Workflow",
        "level": 0,
        "url": "http://css-tricks.com/improving-ui-animation-workflow-velocity-js/"
      }
    ]
  },
  {
    "name": "three.js",
    "tags": ["frontend"],
    "description": "A JavaScript 3D library",
    "home": "http://threejs.org/",
    "before": [],
    "after": ["d3", "velocity"],
    "links":[
      {
        "name": "Documentation",
        "level": 0,
        "url": "http://threejs.org/docs/"
      },
      {
        "name": "Getting Started With three.js",
        "level": 0,
        "url": "http://aerotwist.com/tutorials/getting-started-with-three-js/"
      }
    ]
  },
  {
    "name": "neo4j",
    "tags": ["database"],
    "description": "A graph database",
    "before": [],
    "after": ["mongo", "couchdb", "redis", "memcached", "sql"],
    "home": "http://www.neo4j.org/",
    "links": [
      {
        "name": "Learn Cypher",
        "level": 0,
        "url": "http://www.neo4j.org/learn/cypher"
      }
    ]
  },
  {
    "name": "rethinkdb",
    "tags": ["database"],
    "description": "An database to store JSON",
    "before": ["json"],
    "after": ["heroku", "json", "couchdb", "http", "neo4j", "redis", "memcached", "sql"],
    "home": "http://www.rethinkdb.com/",
    "links": [
      {
        "name": "RethinkDB Quickstart",
        "level": 0,
        "url": "http://www.rethinkdb.com/docs/quickstart/"
      },
      {
        "name": "RethinkDB and Flask",
        "level": 1,
        "url": "http://www.realpython.com/blog/python/rethink-flask-a-simple-todo-list-powered-by-flask-and-rethinkdb/"
      }
    ]
  },
  {
    "name": "flight",
    "tags": ["frontend"],
    "description": "An event-driven web framework for JavaScript",
    "home": "http://flightjs.github.io",
    "before": [],
    "after": ["ember", "angular", "backbone", "meteor"],
    "links": [
      {
        "name": "Learn Flight",
        "level": 0,
        "url": "http://learnflight.io"
      }
    ]
  },
  {
    "name": "meteor",
    "tags": ["backend"],
    "description": "A framework to build realtime web applications in JavaScript",
    "before": [],
    "after": ["angular", "ember", "backbone", "flight"],
    "home": "https://www.meteor.com",
    "links": [
      {
        "name": "Friendly Walkthrough",
        "level": 0,
        "url": "http://andrewscala.com/meteor/"
      },
      {
        "name": "EventedMind Advanced Screencasts",
        "level": 0,
        "url": "https://www.eventedmind.com/"
      },
      {
        "name": "Meteor Manual",
        "level": 0,
        "url": "http://manual.meteor.com/"
      }
    ]
  },
  {
    "name": "react",
    "tags": ["frontend"],
    "description": "A JavaScript library for building user interfaces",
    "before": ["javascript"],
    "after": ["angular", "jquery", "backbone", "flight"],
    "home": "https://facebook.github.io/react/",
    "links": [
      {
        "name": "Getting Started",
        "level": 0,
        "url": "https://facebook.github.io/react/docs/getting-started.html"
      },
      {
        "name": "React.js Introduction For People Who Know jQuery",
        "level": 0,
        "url": "http://reactfordesigners.com/labs/reactjs-introduction-for-people-who-know-just-enough-jquery-to-get-by/"
      }
    ]
  },
  {
    "name": "ember",
    "tags": ["frontend"],
    "description": "Build robust single-page apps with JavaScript",
    "before": ["javascript"],
    "after": ["angular", "jquery", "backbone", "flight"],
    "home": "http://emberjs.com/",
    "links": [
      {
        "name": "Getting Started TodoMVC Guide",
        "level": 0,
        "url": "http://emberjs.com/guides/getting-started/"
      },
      {
        "name": "Ember 101",
        "level": 0,
        "url": "http://ember101.com/"
      },
      {
        "name": "Let's Learn Ember",
        "level": 0,
        "url": "http://freecourses.tutsplus.com/lets-learn-ember/"
      }
    ]
  },
  {
    "name": "backbone",
    "tags": ["frontend"],
    "description": "A framework that makes handling data easier in JavaScript",
    "before": ["javascript"],
    "after": ["angular", "jquery", "ember", "flight"],
    "home": "http://backbonejs.org/",
    "links": [
      {
        "name": "Developing Backbone.js Applications",
        "level": 0,
        "url": "http://addyosmani.github.io/backbone-fundamentals/"
      },
      {
        "name": "Backbone.js for Absolute Beginners",
        "level": 0,
        "url": "http://adrianmejia.com/blog/2012/09/11/backbone-dot-js-for-absolute-beginners-getting-started/"
      }
    ]
  },
  {
    "name": "underscore",
    "tags": ["backend"],
    "description": "A utility belt for JavaScript",
    "before": [],
    "after": ["sugar", "backbone", "coffeescript","lodash", "flight"],
    "home": "http://underscorejs.org/",
    "links": [
      {
        "name": "Getting Cozy with Underscore",
        "level": 0,
        "url": "http://net.tutsplus.com/tutorials/javascript-ajax/getting-cozy-with-underscore-js/"
      }
    ]
  },
  {
    "name": "lodash",
    "tags": ["backend"],
    "description": "A utility library delivering performance",
    "before": [],
    "after": ["sugar", "backbone", "coffeescript","underscore"],
    "home": "http://lodash.com/",
    "links": [
      {
        "name": "Documentation",
        "level": 0,
        "url": "http://lodash.com/docs"
      }
    ]
  },
  {
    "name": "sugar",
    "tags": ["backend"],
    "description": "Extend the functionality of JavaScript",
    "before": [],
    "after": ["underscore", "backbone", "coffeescript"],
    "home": "http://sugarjs.com/",
    "links": [
      {
        "name": "Features",
        "level": 0,
        "url": "http://sugarjs.com/features"
      }
    ]
  },
  {
    "name": "coffeescript",
    "tags": ["frontend"],
    "description": "A language that compiles to JavaScript",
    "before": [],
    "after": ["underscore", "angular", "backbone", "jade", "grunt"],
    "home": "http://coffeescript.org/",
    "links": [
      {
        "name": "Learn X in Y Minutes",
        "level": 0,
        "url": "http://learnxinyminutes.com/docs/coffeescript/"
      }
    ]
  },
  {
    "name": "dart",
    "tags": ["backend"],
    "description": "An alternative to JavaScript",
    "before": [],
    "after": ["node"],
    "home": "http://dartlang.org",
    "links": [
      {
        "name": "Programmer’s Guide",
        "level": 0,
        "url": "https://www.dartlang.org/docs/"
      },
      {
        "name": "Learn X in Y Minutes",
        "level": 0,
        "url": "http://learnxinyminutes.com/docs/dart/"
      }
    ]
  },
  {
    "name": "php",
    "tags": ["backend"],
    "description": "A server-side language for the web",
    "before": [],
    "after": ["python", "node", "sql", "laravel", "symfony", "yii", "phpixie", "cakephp"],
    "home": "http://php.net/",
    "links": [
      {
        "name": "Learn X in Y Minutes",
        "level": 0,
        "url": "http://learnxinyminutes.com/docs/php/"
      },
      {
        "name": "PHP The Right Way",
        "level": 0,
        "url": "http://www.phptherightway.com"
      },
      {
        "name": "Learn PHP",
        "level": 0,
        "url": "http://learn-php.org"
      },
      {
        "name": "I ♥ PHP",
        "level": 0,
        "url": "http://ilovephp.jondh.me.uk/"
      }
    ]
  },
  {
    "name": "laravel",
    "tags": ["backend"],
    "description": "The most popular php web framework",
    "before": [],
    "after": [],
    "home": "http://www.laravel.com",
    "links": [
      {
        "name": "Laravel Docs",
        "level": 0,
        "url": "http://laravel.com/docs"
      },
      {
        "name": "Laravel Ins and Outs",
        "level": 0,
        "url": "http://laravel.io"
      },
      {
        "name": "Laravel Cheatsheet",
        "level": 0,
        "url": "http://cheats.jesse-obrien.ca/"
      },
      {
        "name": "Laravel 4 Mastery",
        "level": 0,
        "url": "http://net.tutsplus.com/tutorials/php/laravel-4-mastery/"
      },
      {
        "name": "Laravel Tutorials via Jason Lewis",
        "level": 0,
        "url": "http://jasonlewis.me/laravel-tutorials"
      }
    ]
  },
  {
    "name": "phalcon",
    "tags": ["backend"],
    "description": "A popular high-performance php framework",
    "before": [],
    "after": [],
    "home": "http://phalconphp.com/en/",
    "links": [
      {
        "name": "Let's Learn By Example",
        "level": 0,
        "url": "http://docs.phalconphp.com/en/latest/reference/tutorial.html"
      }
    ]
  },
  {
    "name": "symfony",
    "tags": ["backend"],
    "description": "A high performance php framework",
    "before": [],
    "after": ["twig"],
    "home": "http://symfony.com/",
    "links": [
      {
        "name": "Symfony in 5 minutes",
        "level": 0,
        "url": "http://symfony.com/in-five-minutes"
      },
      {
        "name": "Get started",
        "level": 0,
        "url": "http://symfony.com/get-started"
      },
      {
        "name": "Cookbook",
        "level": 0,
        "url": "http://symfony.com/doc/current/book/index.html"
      }
    ]
  },
  {
    "name": "codeigniter",
    "tags": ["backend"],
    "description": "A php web framework",
    "before": [],
    "after": ["mysql"],
    "home": "http://ellislab.com/codeigniter",
    "links": [
      {
        "name": "CodeIgniter user manual",
        "level": 0,
        "url": "http://ellislab.com/codeigniter/user-guide/"
      }
    ]
  },
  {
    "name": "cakephp",
    "tags": ["backend"],
    "description": "A framework for php applications",
    "before": [],
    "after": [],
    "home": "http://cakephp.org/",
    "links": [
      {
        "name": "CakePHP Cookbook (Docs)",
        "level": 0,
        "url": "http://book.cakephp.org/2.0/en/"
      },
      {
        "name": "Blog Tutorial",
        "level": 0,
        "url": "http://book.cakephp.org/2.0/en/tutorials-and-examples/blog/blog.html"
      },
      {
        "name": "Community & Help",
        "level": 0,
        "url": "http://community.cakephp.org/"
      }
    ]
  },
  {
    "name": "yii",
    "tags": ["backend"],
    "description": "A php framework built for ajax",
    "before": [],
    "after": ["twig"],
    "home": "http://yiiframework.com/",
    "links": [
      {
        "name": "The Definitive Guide to Yii",
        "level": 0,
        "url": "http://www.yiiframework.com/doc/guide/1.1/en/quickstart.what-is-yii"
      },
      {
        "name": "Larry Ullman's Learning Yii Series",
        "level": 0,
        "url": "http://www.larryullman.com/series/learning-the-yii-framework/"
      },
      {
        "name":"Yii Screencasts",
        "level": 0,
        "url": "http://www.yiiframework.com/screencasts/"
      },
      {
        "name": "The Yii Blog Tutorial",
        "level": 1,
        "url": "http://www.yiiframework.com/doc/blog/"
      }
    ]
  },
  {
    "name": "twig",
    "tags": ["backend"],
    "description": "A template engine for php",
    "before": [],
    "after": [],
    "home": "http://twig.sensiolabs.org/",
    "links": [
      {
        "name": "Documentation",
        "level": 0,
        "url": "http://twig.sensiolabs.org/documentation"
      }
    ]
  },
  {
    "name": "phpixie",
    "tags": ["backend"],
    "description": "An easy-to-learn php framework",
    "before": [],
    "after": [],
    "home": "http://phpixie.com/",
    "links": [
      {
        "name": "30 Minute Tutorial",
        "level": 0,
        "url": "http://phpixie.com/tutorials/learn-phpixie-in-30-minutes/"
      },
      {
        "name": "Developer Blog",
        "level": 0,
        "url": "http://phpixie.com/blog/"
      }
    ]
  },
  {
    "name": "groovy",
    "tags": ["backend"],
    "description": "A dynamic language that works with Java",
    "home": "",
    "before": [],
    "after": ["scala"],
    "links": [
        {
        "name": "Beginner's Tutorial",
        "level": 0,
        "url": "http://groovy.codehaus.org/Beginners+Tutorial"
      },
        {
        "name": "The Groovy Goodness Blog",
        "level": 0,
        "url": "http://mrhaki.blogspot.com/search/label/Groovy%3AGoodness"
      }
    ]
  },
  {
    "name": "clojure",
    "tags": ["backend"],
    "description": "A lisp dialect which runs on the JVM",
    "home": "http://www.clojure.org/",
    "before": [],
    "after": [],
    "links":[
      {
        "name": "Clojure for the Brave and True",
        "level": 0,
        "url": "http://www.braveclojure.com/"
      },
      {
        "name": "Clojure for Beginners",
        "level": 0,
        "url": "http://blackstag.com/blog.posting?id=5"
      },
      {
        "name": "4clojure",
        "level": 1,
        "url": "http://4clojure.com/"
      }
    ]
  },
  {
    "name": "xml",
    "tags": ["database"],
    "description": "An alternative to json",
    "home": "",
    "before": [],
    "after": ["json", "http"],
    "links": [
      {
        "name": "XML Tutorial",
        "level": 0,
        "url": "http://www.quackit.com/xml/tutorial/"
      }
    ]
  },
  {
    "name": "firebase",
    "tags": ["backend"],
    "description": "A realtime backend for your web or mobile app",
    "home": "https://www.firebase.com/index.html",
    "before": [],
    "after": [],
    "links": [
      {
        "name": "5 Minute Chat Tutorial",
        "level": 0,
        "url": "https://www.firebase.com/tutorial/#gettingstarted"
      },
      {
        "name": "Codecademy",
        "level": 0,
        "url": "http://www.codecademy.com/tracks/firebase"
      }
    ]
  },
  {
    "name": "apache",
    "tags": ["bridge"],
    "description": "A very popular http web server",
    "home": "https://httpd.apache.org/",
    "before": [],
    "after": ["http", "rest", "nginx"],
    "links":[
      {
        "name": "Apache Documentation",
        "level": 0,
        "url": "https://httpd.apache.org/docs/2.4/"
      }
    ]
  },
  {
    "name": "nginx",
    "tags": ["bridge"],
    "description": "A popular http web server, load balancer, and http cache",
    "home": "http://nginx.org/",
    "before": [],
    "after": ["http", "rest", "apache"],
    "links":[
      {
        "name": "Beginner's Guide",
        "level": 0,
        "url": "http://nginx.org/en/docs/beginners_guide.html"
      }
    ]
  },
  {
    "name": "perl",
    "tags": ["backend"],
    "description": "A popular programming language",
    "home": "http://www.perl.org/",
    "before": [],
    "after": ["sql", "postgresql", "vagrant"],
    "links":[
      {
        "name": "Learn Perl",
        "level": 0,
        "url": "http://www.perl.org/learn.html"
      },
      {
        "name": "CPAN",
        "level": 0,
        "url": "http://www.cpan.org/"
      },
      {
        "name": "metacpan",
        "level": 0,
        "url": "http://www.metacpan.org/"
      },
      {
        "name": "Advanced Perl",
        "level": 2,
        "url": "http://docstore.mik.ua/orelly/perl/advprog/"
      }
    ]
  },
  {
    "name": "vagrant",
    "tags": ["bridge"],
    "description": "A tool for building and managing virtual environments",
    "home": "http://www.vagrantup.com/",
    "before": [],
    "after": ["docker"],
    "links":[
      {
        "name":"Why Vagrant?",
        "level": 0,
        "url": "http://docs-v1.vagrantup.com/v1/docs/getting-started/why.html"
      },
      {
        "name": "Getting Started",
        "level": 0,
        "url": "http://docs.vagrantup.com/v2/getting-started/index.html"
      }
    ]
  },
  {
    "name": "docker",
    "tags": ["bridge"],
    "description": "Create lightweight, portable, self-sufficient containers",
    "home": "http://www.docker.io/",
    "before": [],
    "after": ["vagrant"],
    "links":[
      {
        "name": "Docker Interactive Tutorial",
        "level": 0,
        "url": "http://docs.docker.com/linux/started/"
      }
    ]
  },
  {
    "name": "c#",
    "tags": ["backend"],
    "description": "A popular web programming language",
    "home": "http://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
    "before": [],
    "after": [".net"],
    "links": [
      {
        "name": "Learn X in Y Minutes",
        "level": 0,
        "url": "http://learnxinyminutes.com/docs/csharp/"
      }
    ]
  },
  {
    "name": ".net",
    "tags": ["backend"],
    "description": "A web framework for c#",
    "home": "http://www.microsoft.com/net",
    "before": [],
    "after": ["api","sql","bootstrap"],
    "links":[
      {
        "name": "Intro to ASP.NET MVC 5",
        "level": 0,
        "url": "http://www.asp.net/mvc/tutorials/mvc-5/introduction/getting-started"
      }
    ]
  },
  {
    "name": "lightswitch",
    "tags": ["backend"],
    "description": "A development framework for the web and mobile",
    "home": "http://msdn.microsoft.com/en-us/vstudio/ff796201",
    "before": [],
    "after": [".net","sql"],
    "links":[
      {
        "name": "Intro to Lightswitch",
        "level": 0,
        "url": "http://blogs.msdn.com/b/bethmassi/archive/2011/12/01/beginning-lightswitch-getting-started.aspx"
      }
    ]
  },
  {
    "name": "coldfusion",
    "tags": ["backend"],
    "description": "A server application for Java",
    "home": "http://www.adobe.com/products/coldfusion-family.html",
    "before": [],
    "after": ["sql"],
    "links":[
      {
        "name":"Coldfusion Tutorials",
        "level": 0,
        "url": "http://www.quackit.com/coldfusion/tutorial/"
      },
      {
        "name":"Raymond Camden's CF Blog",
        "level": 0,
        "url": "http://www.raymondcamden.com/index.cfm/ColdFusion"
      },
      {
        "name": "Dan Vega's CF Blog entries",
        "level": 0,
        "url": "http://www.danvega.org/blog/coldfusion"
      },
      {
        "name": "Ben Nadel CF Blog entries",
        "level": 0,
        "url": "http://www.bennadel.com/blog/tags/1-ColdFusion-blog-entries.htm"
      }
    ]
  },
  {
    "name": "seo",
    "tags": ["bridge"],
    "description": "Ranking well in search engines",
    "home": "",
    "before": [],
    "after": [],
    "links":[
      {
        "name": "Google's Starter Guide",
        "level": 0,
        "url": "https://static.googleusercontent.com/external_content/untrusted_dlcp/www.google.com/en//webmasters/docs/search-engine-optimization-starter-guide.pdf"
      },
      {
        "name": "The Advanced Guide to SEO",
        "level": 0,
        "url": "http://www.quicksprout.com/the-advanced-guide-to-seo/"
      }
    ]
  },
  {
    "name": "api",
    "tags": ["api"],
    "description": "How to expose and access data from different services",
    "home": "",
    "before": [],
    "after": ["rest", "webhooks", "mashape"],
    "links": [
      {
        "name": "Designing an API",
        "level": 0,
        "url": "http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api?hn"
      },
      {
        "name": "A list of 40+ tutorials on how to make an api",
        "level": 0,
        "url": "http://blog.mashape.com/post/60820526317/list-of-40-tutorials-on-how-to-create-an-api"
      },
      {
        "name": "Debug and test APIs and backend services.",
        "level": 0,
        "url": "https://www.runscope.com"
      }
    ]
  },
  {
    "name": "webhooks",
    "tags": ["api"],
    "description": "HTTP based integrations",
    "home": "",
    "before": [],
    "after": ["api"],
    "links": [
      {
        "name": "7 Reasons Webhooks Are Magic",
        "level": 0,
        "url": "http://blog.iron.io/2013/09/7-reasons-webhooks-are-magic.html"
      },
      {
        "name": "Troubleshooting Webhooks",
        "level": 0,
        "url": "https://www.runscope.com/provider-guide/troubleshooting-webhooks"
      }
    ]
  },
  {
    "name": "stack exchange",
    "tags": ["api"],
    "description": "Access all of Stack Exchange and Stack Overflow",
    "home": "https://api.stackexchange.com/",
    "before": [],
    "after": [],
    "links": [
      {
        "name": "Docs",
        "level": 0,
        "url": "https://api.stackexchange.com/docs"
      }
    ]
  },
  {
    "name": "google",
    "tags": ["api"],
    "description": "An enormous collection of APIs from Google",
    "home": "http://developers.google.com",
    "before": [],
    "after": [],
    "links": [
      {
        "name": "Google API Explorer",
        "level": 0,
        "url": "https://developers.google.com/apis-explorer/#p/"
      }
    ]
  },
  {
    "name": "mashape",
    "tags": ["api"],
    "description": "Distribute, monetize, and consume multiple APIs",
    "home": "",
    "before": [],
    "after": ["facebook", "foursquare", "twilio"],
    "links": [
      {
        "name": "Codecademy",
        "level": 0,
        "url": "http://www.codecademy.com/tracks/mashape"
      }
    ]
  },
  {
    "name": "facebook",
    "tags": ["api"],
    "description": "Get data about people and their networks",
    "home": "https://developers.facebook.com/",
    "before": [],
    "after": ["foursquare", "twilio"],
    "links":[
      {
        "name": "Explore",
        "level": 0,
        "url": "https://developers.facebook.com/tools/explorer"
      }
    ]
  },
  {
    "name": "foursquare",
    "tags": ["api"],
    "description": "Get data about places",
    "home": "http://developer.foursquare.com/",
    "before": [],
    "after": ["facebook", "twilio"],
    "links":[
      {
        "name": "Tutorial",
        "level": 0,
        "url": "https://developer.foursquare.com/overview/tutorial"
      },
      {
        "name": "Explore",
        "level": 0,
        "url": "https://developer.foursquare.com/docs/explore"
      }
    ]
  },
  {
    "name": "sendgrid",
    "tags": ["api"],
    "description": "An email API",
    "home": "http://sendgrid.com",
    "before": [],
    "after": [],
    "links":[
      {
        "name": "Docs",
        "level": 0,
        "url": "http://sendgrid.com/docs/"
      },
      {
        "name": "Codecademy",
        "level": 0,
        "url": "http://www.codecademy.com/tracks/sendgrid"
      }
    ]
  },
  {
    "name": "mandrill",
    "tags": ["api"],
    "description": "An email API by Mailchimp",
    "home": "http://mandrill.com",
    "before": [],
    "after": [],
    "links": [
      {
        "name": "Getting Started with Mandrill",
        "level": 0,
        "url": "http://help.mandrill.com/entries/21650603-How-do-I-get-started-with-Mandrill-"
      }
    ]
  },
  {
    "name": "semantria",
    "tags": ["api"],
    "description": "A text and sentiment analysis API",
    "home": "http://semantria.com",
    "before": [],
    "after": [],
    "links":[
      {
        "name": "Developer Portal",
        "level": 0,
        "url": "https://semantria.com/developer"
      }
    ]
  },
  {
    "name": "twilio",
    "tags": ["api"],
    "description": "Send and receive texts and calls",
    "home": "http://twilio.com/",
    "before": [],
    "after": ["facebook", "foursquare"],
    "links":[
      {
        "name": "Quickstart",
        "level": 0,
        "url": "http://www.twilio.com/docs/quickstart"
      }
    ]
  },
  {
    "name": "stripe",
    "tags": ["api"],
    "description": "Accept payments on your site",
    "home": "https://stripe.com/",
    "before": [],
    "after": [],
    "links": [
      {
        "name": "Get Started",
        "level": 0,
        "url": "https://stripe.com/docs"
      },
      {
        "name": "Making Your First Charge",
        "level": 0,
        "url": "https://stripe.com/docs/tutorials/charges"
      }
    ]
  },
  {
    "name": "alchemy",
    "tags": ["api"],
    "description": "A text analysis API",
    "home": "http://www.alchemyapi.com/",
    "before": [],
    "after": ["facebook", "foursquare", "twilio"],
    "links":[
      {
        "name": "Getting Started Guide",
        "level": 0,
        "url": "http://www.alchemyapi.com/developers/getting-started-guide/"
      },
      {
        "name": "Interactive Web Demo",
        "level": 0,
        "url": "http://www.alchemyapi.com/products/demo/"
      },
      {
        "name": "Docs",
        "level": 1,
        "url": "http://www.alchemyapi.com/api/"
      },
      {
        "name": "SDKs",
        "level": 1,
        "url": "http://www.alchemyapi.com/developers/sdks/"
      }
    ]
  },
  {
    "name": "lob",
    "tags": ["api"],
    "description": "An API that lets you print and mail documents",
    "home": "http://lob.com",
    "before": [],
    "after": ["facebook", "foursquare", "twilio"],
    "links": [
      {
        "name": "docs",
        "level": 0,
        "url": "https://www.lob.com/docs"
      }
    ]
  },
  {
    "name": "shirts.io",
    "tags": ["api"],
    "description": "An API to send custom shirts",
    "home": "https://www.shirts.io/",
    "before": [],
    "after": [],
    "links": [
      {
       "name": "Products API",
       "level": 0,
       "url": "https://www.shirts.io/docs/products_reference/"
      }
    ]
  },
  {
    "name": "plivo",
    "tags": ["api"],
    "description": "Service to send and receive texts and calls",
    "home": "https://www.plivo.com/",
    "before": [],
    "after": [],
    "links":[
      {
        "name": "Getting Started",
        "level": 0,
        "url": "https://www.plivo.com/docs/getting-started/"
      }
    ]
  }
]
