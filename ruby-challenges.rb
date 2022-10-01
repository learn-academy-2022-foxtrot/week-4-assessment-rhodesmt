# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def odd_or_even (num)
    if num.odd?
        p "#{num} is odd."
    elsif num.even?
        p "#{num} is even"
    else 
        p 'Error'
    end
end

odd_or_even(num1)
# Output: "7 is odd."
odd_or_even(num2)
# Output: "42 is even"
odd_or_even(num3)
# Output: "221 is odd."

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def no_vowels (string)
   p new_string = string.delete('AEIOUaeiou')
end

no_vowels(beatles_album1)
# Expected output: 'Rbbr Sl'
no_vowels(beatles_album2)
# Expected output: 'Sgt Pppr'
no_vowels(beatles_album3)
# Expected output: 'bby Rd'

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome_check (string)
    if string.downcase == string.downcase.reverse
        p "#{string} is a palindrome"
    else
        p "#{string} is not a palindrome"
    end
end

palindrome_check(palindrome_tester1)
# Expected output: 'Racecar is a palindrome'
palindrome_check(palindrome_tester2)
# Expected output: 'LEARN is not a palindrome'
palindrome_check(palindrome_tester3)
# Expected output: 'Rotator is a palindrome'
