# File System Exercise

In this exercise, you will try to create a system of directories and files using the shell commands `cd`, `mkdir`, `ls`, `rmdir`, and `touch`. You may need to use `rm` if or `mv` if you make a mistake.

This exercise is for you to really start practicing the commands that will make your life very easy to get use to the command line. You will spend a lot of your time navigating around file structures, creating files, searching for files, lots of files, files, files. We recommend you do these types of exercises over and over to become mindlessly proficient with these skills.

## Step 1:

Create the following directory structure with the specified files. The files are just empty text files. You can create an empty file with the command `touch «path»/«file»`.

```
.
├── one
│   ├── alpha
│   │   └── secret.txt
│   ├── beta
│   │   └── secret.txt
│   └── gamma
│       └── under-over.txt
├── three
│   ├── alpha
│   │   └── outside.txt
│   ├── beta
│   │   └── outside.txt
│   └── gamma
│       └── secret.txt
└── two
    ├── alpha
    │   └── under-over.txt
    ├── beta
    │   └── fever.txt
    └── gamma
        └── fever.txt
```

## Step 2:

Move the files to top-level category directories. For example, if the file "secret.txt" was in "one/alpha/", then move that file to a top-level directory named "secret" and rename it "one-alpha.txt".

```
.
├── fever
│   ├── two-beta.txt
│   └── two-gamma.txt
├── one
│   ├── alpha
│   ├── beta
│   └── gamma
├── outside
│   ├── three-alpha.txt
│   └── three-beta.txt
├── secret
│   ├── one-alpha.txt
│   ├── one-beta.txt
│   └── three-gamma.txt
├── three
│   ├── alpha
│   ├── beta
│   └── gamma
├── two
│   ├── alpha
│   ├── beta
│   └── gamma
└── under-over
    ├── one-gamma.txt
    └── two-alpha.txt
```

## Step 3:

Remove the empty directories.

```
.
├── fever
│   ├── two-beta.txt
│   └── two-gamma.txt
├── outside
│   ├── three-alpha.txt
│   └── three-beta.txt
├── secret
│   ├── one-alpha.txt
│   ├── one-beta.txt
│   └── three-gamma.txt
└── under-over
    ├── one-gamma.txt
    └── two-alpha.txt
```

## Step 4:

Delete all the files that have the word beta in them.

```
.
├── fever
│   └── two-gamma.txt
├── outside
│   └── three-alpha.txt
├── secret
│   ├── one-alpha.txt
│   └── three-gamma.txt
└── under-over
    ├── one-gamma.txt
    └── two-alpha.txt
```