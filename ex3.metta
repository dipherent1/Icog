; Base case: an empty list or single-element list is already sorted
(= (merge-sort ()) ()) ; Empty list
(= (merge-sort (:: $x ())) (:: $x ())) ; Single-element list

; Recursive case: split the list into two halves, sort them, and merge the results
(= (merge-sort $list)
    (let
        $halves (split $list)
        $left (car $halves)
        $right (cdr $halves)
        (merge (merge-sort $left) (merge-sort $right))))

; Merge two sorted lists into one sorted list
(= (merge () $list2) $list2) ; If the first list is empty, return the second
(= (merge $list1 ()) $list1) ; If the second list is empty, return the first
(= (merge (:: $x $xs) (:: $y $ys))
    (if (< $x $y)
        (:: $x (merge $xs (:: $y $ys))) ; Add $x first if it’s smaller
        (:: $y (merge (:: $x $xs) $ys)))) ; Add $y first if it’s smaller

; Split a list into two halves
(= (split ()) (tuple () ())) ; Split an empty list into two empty lists
(= (split (:: $x ())) (tuple (:: $x ()) ())) ; A single-element list stays in one half
(= (split (:: $x (:: $y $rest)))
    (let
        $halves (split $rest)
        $left (car $halves)
        $right (cdr $halves)
        (tuple (:: $x $left) (:: $y $right)))) ; Distribute elements alternately

; Utility functions: car and cdr for tuples
(= (car (tuple $a $b)) $a)
(= (cdr (tuple $a $b)) $b)

; Query: Sort a list using merge sort
!(merge-sort (:: 5 (:: 3 (:: 8 (:: 2 (:: 7 ())))))
