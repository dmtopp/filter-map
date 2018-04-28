# Filter Map

This is an experiment to try and find an implementation of `filterMap` that satisfies the following conditions:

+ does not mutate any arguments
+ is as fast as possible

In some cases I've found that `Array.reduce` is not as performant as I would have thought, so this is really a test to see whether that's true with `filterMap`.


# Results
So far, the results show `Array.reduce` easily being the fastest.

```
Array.filter.map x 43,529 ops/sec ±0.53% (90 runs sampled)
Recursive filterMap x 11,973 ops/sec ±0.66% (89 runs sampled)
Array.reduce filterMap x 66,596 ops/sec ±0.58% (90 runs sampled)
```

More experimentation is probably needed.  I'm sure that my recursive version could be optimized, and it would be fun to play with some other implementations as well.

If you'd like to run these yourself, you can:

1. clone the repo
2. `npm install && npm run benchmark`
