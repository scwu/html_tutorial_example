Directions for deploying to your UPenn site

1. scp your files to eniac
	```scp -r directory_from/ {pennkey}@eniac.seas.upenn.edu:```

2. ssh into your upenn account
	```ssh {pennkey}@eniac.seas.upenn.edu```

3. Create an html directory in your home directory:
	```mkdir ~/html```

4. Move all files from folder you moved to html folder:
	```mv /directory_from/* html/```

5.  Make sure the permissions on both your html and home directory allow world excecution:
	```chmod a+x ~/ ~/html```

6.  Once the pages are in your new directory, make sure the files are world readable:
	```find ~/html -type d -print | xargs chmod a+rx```
	```find ~/html -type f -print | xargs chmod a+r```

