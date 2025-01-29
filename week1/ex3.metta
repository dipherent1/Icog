; Base case: An empty list or single-element list is already sorted
(= (bubble-sort ()) ())  
(= (bubble-sort (:: $x ())) (:: $x ()))  

; Bubble pass: Move the largest element to the end
(= (bubble-pass ()) ())  
(= (bubble-pass (:: $x ())) (:: $x ()))  

(= (bubble-pass (:: $x (:: $y $rest)))
    (if (> $x $y)  
        (:: $y (bubble-pass (:: $x $rest)))  ; Swap if $x > $y
        (:: $x (bubble-pass (:: $y $rest)))  ; Keep order otherwise
    )
)

; Bubble Sort: Apply Bubble Pass repeatedly until sorted
(= (bubble-sort $list)
    (if (== (bubble-pass $list) $list)  
        $list  ; Stop if no swaps happened
        (bubble-sort (bubble-pass $list))  ; Otherwise, continue sorting
    )
)

; Query: Sort a list using Bubble Sort
!(bubble-sort (:: 5 (:: 3 (:: 8 (:: 2 (:: 7 ()))))))
