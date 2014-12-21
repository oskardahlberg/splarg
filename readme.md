# Splarg

Utils for dealing with function arguments

You can either just require the individual methods (/lib/method)
or use the splarg, which works like this

	splarg.apply(null, arguments)
	-> toArray

	splarg.trim().apply(null, arguments)
	-> toArray -> trim

	splarg.trim().splitCallback().apply(null, arguments)
	-> toArray -> trim -> splitCallback

utils can take arguments

	splarg.splitCallback(9).apply(null, arguments)

in this case the callback wont be split from the rest of the arguments
if its index is passed 9

## utils

### trim
remove trailing undefined values or optionally pass a filter

### splitCallback
splits the arguments if the last is a function
	(3, 4, fn) -> [[3, 4], fn]

optionally pass a minimum callback index