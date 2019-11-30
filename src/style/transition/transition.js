@mixin transition($transition...) {
    -moz-transition: $transition;
    -o-transition: $transition;
    -webkit-transition: $transition;
    transition: $transition;
}