from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from random import choice


class HelloWorldView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"message": "Hello, World!"})


class MOTDView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        messages = """1. Every day is a fresh start—make it count.
2. You are stronger than you think.
3. Progress, not perfection, is the goal.
4. Your potential is limitless.
5. Today is the perfect day to believe in yourself.
6. Small steps lead to big changes.
7. You've got this.
8. Be the energy you want to attract.
9. Your effort today shapes your tomorrow.
10. Believe in the process.
11. You are capable of amazing things.
12. Today, choose to be kind to yourself.
13. Every challenge is an opportunity to grow.
14. Your voice matters.
15. Success is a journey, not a destination.
16. You are worthy of your dreams.
17. Today is your day to shine.
18. Keep pushing forward—you're closer than you think.
19. Your hard work will pay off.
20. Be proud of how far you've come.
21. You are enough, just as you are.
22. Today, focus on what you can control.
23. Your potential is waiting to be unleashed.
24. Don't give up—great things take time.
25. You are braver than you believe.
26. Today is full of possibilities.
27. Your dreams are worth fighting for.
28. Every setback is a setup for a comeback.
29. You are making a difference.
30. Today, choose growth over comfort.
31. Your consistency will create your success.
32. You have everything you need within you.
33. Today is a gift—that's why it's called the present.
34. Keep going—you're doing better than you know.
35. Your passion is your superpower.
36. Today, let your light shine bright.
37. You are deserving of all the good coming your way.
38. Small wins are still wins—celebrate them.
39. Your determination will take you far.
40. Today, be the best version of yourself.
41. You are not alone in this journey.
42. Your future self will thank you for your effort today.
43. Today, choose to be unstoppable.
44. You have the power to change your life.
45. Keep believing—miracles happen.
46. Your story is still being written.
47. Today, embrace your unique strengths.
48. You are capable of turning your dreams into reality.
49. Every day is an opportunity to be better.
50. You've got the strength to overcome anything—go get it.""".splitlines()
        return Response({"message": choice(messages).split(" ", 1)[1]})
