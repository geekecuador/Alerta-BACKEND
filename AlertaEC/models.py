from __future__ import unicode_literals
from django.contrib.gis.geos import Point
from django.db import models
from django.contrib.gis.db import models
from location_field.models.spatial import LocationField
# Create your models here.

class Evento(models.Model):
    nombre_evento = models.CharField(max_length=25)
    pais = models.CharField(max_length=25)

    def __str__(self):
        return self.nombre_evento
class Desaparecido(models.Model):
    nombre = models.CharField(max_length=15)
    fotografia = models.ImageField(upload_to="imagenes")
    latitud = models.DecimalField(max_digits=9, decimal_places=6)
    longitud = models.DecimalField(max_digits=9, decimal_places=6)
    categoria = models.CharField(max_length=25)
    evento = models.ForeignKey(Evento)
    discapacidad = models.CharField(max_length=30)
    estado = models.CharField(max_length=25)
    reportado = models.BooleanField(default=True)
    enbusqueda = models.BooleanField(default=False)
    encontrado = models.BooleanField(default=False)


    def __str__(self):
        return self.nombre