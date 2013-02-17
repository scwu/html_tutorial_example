Directions for deploying to your UPenn site

1. scp your files to eniac
scp <pennkey>@eniac.seas.upenn.edu:directory_to/filename:directory_from/filename
2. ssh into your upenn account
ssh <pennkey>@eniac.seas.upenn.edu

Create an html directory in your home directory:
    mkdir ~/html

Make sure the permissions on both your html and home directory allow world excecution:
    chmod a+x ~/ ~/html

Toss some cool pages into your new directory and make sure the files are world readable:
    find ~/html -type d -print | xargs chmod a+rx
    find ~/html -type f -print | xargs chmod a+r

