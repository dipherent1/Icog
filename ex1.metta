; Custom modulo implementation
(= (mod $x $y)
    (if (< $x $y)
        $x
        (if (= $x $y)
            0
            (mod (- $x $y) $y)
        )
    )
)

;; ; Base case: when $n is 0, the sum is returned
;; (= (sum-multiples 0 $sum)
;;     $sum)

; Recursive case: if $n is divisible by 3 or 5, add $n to the sum
; Find the sum of all the multiples of 3 or 5 upto a certain number
(= (sum-multiple $num $sum)
    (if (> $num 0)
        (if (or (== 0 (% $num 3)) (== 0 (% $num 5)))
            (sum-multiple (- $num 1) (+ $sum $num))
            (sum-multiple (- $num 1) $sum)
        )
        $sum
    )
)
; Sum of multiples of 3 and 5 upto 10
!(sum-multiple 9 0)

