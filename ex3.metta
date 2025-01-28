(= (partition () $pivot) (() ())) ; Base case: empty list

(= (partition (:: $x $xs) $pivot)
   (if (<= $x $pivot)
       (let (($less $greater) (partition $xs $pivot))
         ((:: $x $less) $greater))
       (let (($less $greater) (partition $xs $pivot))
         ($less (:: $x $greater)))))


(= (quicksort ()) ()) ; Base case: empty list

(= (quicksort (:: $x $xs))
   (let (($less $greater) (partition $xs $x))
     (append (quicksort $less)
             (:: $x (quicksort $greater)))))

(= (append () $ys) $ys)
(= (append (:: $x $xs) $ys) (:: $x (append $xs $ys)))

(= my-list (:: 3 (:: 1 (:: 4 (:: 1 (:: 5 (:: 9 (:: 2 (:: 6 ())))))))))
!(quicksort my-list)

; Test with different lists
(= test-list1 (:: 5 (:: 4 (:: 3 (:: 2 (:: 1 ()))))))
!(quicksort test-list1)

; Test with duplicates
(= test-list2 (:: 2 (:: 2 (:: 1 (:: 1 ())))))
!(quicksort test-list2)

; Test with single element
(= test-list3 (:: 1 ()))
!(quicksort test-list3)