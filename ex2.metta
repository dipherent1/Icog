(= (fibonacci-sum $a $b $limit $sum)
    (if (< $a $limit)
        (if (== 0 (% $a 2))
            (fibonacci-sum $b (+ $a $b) $limit (+ $sum $a))
            (fibonacci-sum $b (+ $a $b) $limit $sum)
        )
        $sum
    )
)

!(fibonacci-sum 1 2 100 0)