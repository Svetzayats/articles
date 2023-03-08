## Unix Essential Training - LinkedIn course by Kevin Skoglund - takeaways

[Link to course on LinkedIn](https://www.linkedin.com/learning-login/share?account=2113185&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Funix-essential-training%3Ftrk%3Dshare_ent_url%26shareId%3DRq7aoEOkSQapLlY1F04S9A%253D%253D)

#### about users

who - info about logins
whoami - current logged user

#### shortcuts

arrow down and arrow up - history of input
control + a - move cursor to start of line
control + e - move cursor to end of line
tab - try to complete the command
clear - clear terminal

#### command structure

command options arguments

make -v
make --version

ls -l -a -h /usr
ls -lah /usr

sometimes options have arguments
banner -w 50 'Hello world'
banner -w50 'Hello world'

#### kernel and shells

kernel - core of the operating system, allocates time and memory to processes
shell - outer layer of the operating system, interacts with the user, send requests to the kernel

echo $SHELL - default shell
echo $0 - current shell

bash / ksh / zsh / tcsh / sh - switch to shell (layers)
exit - command for exit from this shell layer

#### filesystem

ls -lh - list human readable
ls -a = all files (including dot files)

.. - directory right above this directory
cd name_directory - move to directory

#### creating files

name - 255 character maximum, case sensitive

#### reading files

cat - concatenate
more - paginated output
less - scrolling, less > more

#### creating directory

mkdir
mkdir -p new/new_1/new_2 - creates all needed directories on all levels

#### move and renaming

mv file_name directory - move in directory.
mv file_name1.txt dir/file_name2.txt - it moves and renames

options
-f - force overwriting (default)
-n - no overwriting
-i - interactive overwriting (ask me)

#### copying

cp command
cp file path - copy file
cp -R dirName path - copy directories

options
-R - recursive copy directories
-f - force overwriting (default if empty)
-n - no overwriting
-i - interactive overwriting (ask me)

#### deleting

when you delete - it's gone immediately and forever, no trash bin\
rm file - remove
rm -R directory - deleting directory and it's content

#### symbolic links

symlink - shortcut or an alias
ln -s file_name symlink_name - we can create symlinks for files and for directories, same way
symlink references a file path, not a file

#### searching

find /home -name "vacation_photo.jpg"

- - zero or more characters (glob)
    ? - any one character
    [] - any character in the brackets

find . - find in current directory

#### users and groups

chown - changing owner / group of file. If we write directory - owner of directory is changing, but content owners is staying. If we want change directory owner and all content - use -R option.

#### permissions

rwx rwx rwx - user group other
764 - octal notation
r = 4 - read
w = 2 - write
x = 1 - execute
7 - if you can read, write, execute
6 - read and write
etc

chmod ugo=rwx filename
chmod u=rwx, g=rw, o=r filename
chmod 777 filename
chmod 755 filename
chmod o-rx filename - remove permission read and execute from other

#### root, sudo and sudoers

root - most privileged unix user account, can do anything on the system
sudo - command borrows the privileges of root, "substitute user and do"

sudo !! - run with sudo previous command

#### commands

echo $PATH
PATH={new path}

uptime - computer works without reboots
users - all users logged in system
who - all users logged in and how they logged (remember that every terminal - separate session)
uname - unix name of system
uname -a - more information about system
df - disk free
df -h - human readable version
du path_to_directory - disk usage

#### monitoring processes

ps - process steps - return my processes
ps -a - list of running processes by all users
ps aux - list processes with owners, PID, CPU, memory

top - running dashboard of processes - cpu, memory...

#### stopping processes

kill PID
kill -9 PID

#### history

history - list commands

there are differences between results of command history in bash and zsh

history - each command has own number - we can !number for re-executing this command
!-5 - execute command that was five command ago
!-1 - try again
!! - same command again
command !$ - command + arguments from previous command

#### directing output to a file \

stdin
stdout

command > file - directing to file, overrides what was in file
command >> file - appending to file

#### directing input from a file

command < file

input first, output second
sort < people.txt > sorted_people.txt

#### piping output to input

command1 | command2 - res of command 1 is passed to command2

#### supressing output

something > /dev/null - sent to nowhere

#### setting command aliases

alias ll='ls -lah'

you need add it to .zshrc or .bash_profile - then it will work when you log in
