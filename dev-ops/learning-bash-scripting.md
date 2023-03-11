## Learning Bash scripting - LinkedIn course by Scott Simpson - takeaways

[Course on LinkedIn by Scott Simpson](https://www.linkedin.com/learning-login/share?account=2113185&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Flearning-bash-scripting-17063287%3Ftrk%3Dshare_ent_url%26shareId%3DtsUAt7AqSI2CHv9NVz%252Byaw%253D%253D)

#### pipes and redirections

| pipes send the output of one process to another

redirection (to and from files)
0 - stdin (standard input) - keyboard or other input
1 - stdout - regular output
2 - stderr - output marked as error
\> - redirect to somewhere output, output redirection (truncate)
\>> - redirect, but append (not replace)

redirecting errors - with 2
ls /not_real_folder 1>output.txt 2>error.txt

\< - input redirection cat < list.txt
<< - here document

builtins - help (commands - man)
enable -n name - turn off builtin
help - list of builtins

#### expansions and substitutions

~ tilde expansion
represents home directory $HOME

{...} brace expansion
creates sets of ranges
echo c{a, o, u}t
cat, cot, cut

echo {1..10}
1 2 3 4 5 6 7 8 9 10

echo {a..z}
echo {1..30..3} - every third number (1, 4, 7, 10, ...)

touch file\_{01..12}{a..d} // file_01a, file_01b etc

${...} parameter expansion
retrieves and transforms stored values
greeting='hello'
$greeting
${greeting}

$(...) command substitution
puts the output of one command inside another
$(command)

$((...)) arithmetic substitution

#### make file executable

chmod +x myscript.sh

##### echo

displaying text
echo -n - doesn't change line, helps build complex long sentences from shorts, on one line

single quote ' ' - make all literal (bash interpret all as text)
echo 'The kernel is $(uname -r)' // The kernel is $(uname -r)

double quote " " = interprets literals and values
echo "The kernel is $(uname -r)" // The kernel is 5.4.0-azure

to do more precise calculations - bc or awk

$RANDOM - get random value

##### test

[ 'cat' = 'dog' ]; echo $? // 1
comparing values

shell returns a status code after a command completes
0 - true
1- false
$? - result of last executed command

[[4 -lt 3]];echo $? // 1
we can use && and || in [[]]
regular expression

##### printf

print with placeholders

##### working with arrays

indexed array
snacks=("apple" "banana")
declare -a snacks=("chips")
echo ${snacks[0]}

associative arrays
declare -A office
office[city]="Tbilisi"

#### shebang line

#!/usr/bin/env Bash
This is a more portable way of writing the shebang because the location of Bash on different systems can vary.
Shebang is a shortening of the words 'hash' and 'bang', referring to the pound sign and the exclamation mark respectively.

#### conditional statements

if condition [[]]
elif
then
else
fi

#### loops

while ... // while condition true
do
...
done

until ... // while condition false
do
...
done

for i in ...
do
...
done

for (( i=1; i<=10; i++ >))
do
echo $i
done

case $variable in
value1) echo "Value1";;
value2|value3) echo "Value2 or Value3";;
\*) echo 'all';;
esac

#### functions

fname() {
...
}

should be declared before using
calling - without () - fname

greet() {
echo "Hi there, $1"
}

greet Scott

$a - all arguments
for f in "$@"; do
...
done

$FUNCNAME - name of function

#### script arguments

$0 - name of script
$1 - first argument for script
$@ - all arguments
$# - number of arguments

#### options

while getopts u:p:ab option; do
... $options - contains param for option
$OPTARG - value of param for flag
done

u: p: - wait params
ab - no params just presence
command -u scott -p param2value -a

#### getting input

read name - read input after enter and save it to variable name
read -s pass - input without showing letters while printing
read -p "Question? " answer - on one line question and answer

select animal in "bird" "dog" "fish" // shows all 3 option, user pick one with number 1 2 3
do
echo "You selected $animal"
break;
done

read -ep "Favorite color? " -i "Blue" favcolor

#### troubleshooting

set -x - print all commands that run
