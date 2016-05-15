from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.contrib.auth import logout as auth_logout
# Create your views here.



def index(request):
   # social_user = request.user.social_auth.filter(
#     provider='facebook',
# ).first()
#     print social_user
#     print request.user.social_auth
#     print request.user.social_auth.values_list('provider')
#     print  UserSocialAuth.id
    x = request.user
    print x
    print type(x)
    x.id
    print x.id
    return render(request,'index.html',{})

def logout(request):
    print "Salir"
    auth_logout(request)
    return redirect('/')

def desastre(request):
    return render(request,'admin.html',{})


def mapa(request):
    return render(request,'mapa.html',{})