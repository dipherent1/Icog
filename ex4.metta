; Base case: An empty list maps to an empty list
(= (binary-map $f $constant ()) ())

; Recursive case: Apply $f to the head of the list and the constant, then recurse
(= (binary-map $f $constant (:: $x $rest))
    (:: ($f $x $constant) (binary-map $f $constant $rest)))
    
; Example binary function: Add two numbers
(= (addTwo $x $y) (+ $x $y))

; Query: Apply binary-map with addTwo, constant 10, and the list (1, 2, 3)
!(binary-map addTwo 10 (:: 1 (:: 2 (:: 3 ()))))
